<template>
  <Draggable
    class="dragArea"
    tag="ul"
    group="people"
    :data-id="aid"
    :list="currentItemChildIds"
    :item-key="(key) => key"
    @end="handleEnd"
    >
    <template #item="{element: itemId}">
      <li :data-id="itemId">
        <a-space>
          <input type="text" v-model="store.flatNestedTreeMap[itemId].name" style="margin-top:10px">
          
          <span>data-id：{{ itemId }}</span>

          <button disabled="true">copy</button>
          <button @click="handleDelect(itemId)">删除</button>
        </a-space>
        
        <FlatNestedTree :aid="itemId" />
      </li>
    </template>
  </Draggable>
</template>

<script setup>
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import { store } from './flatTreeStore'
import { cloneDeep } from 'lodash-es'

defineOptions({
  name: 'FlatNestedTree',
})

const props = defineProps({
  aid: {
    type: String,
    required: true
  }
})

const currentItemChildIds = computed(() => {
  // 阻止 Draggable 组件自动更新
  return cloneDeep(store.flatNestedTreeMap[props.aid].childIds)
})

const handleEnd = (evt) => {
  const treeMap = cloneDeep(store.flatNestedTreeMap)

  const toId = evt.to.dataset.id
  const parentId = evt.target.dataset.id

  const isSort = parentId === toId
  isSort ? sortList(evt, treeMap) : moveList(evt, treeMap)

  // 更新
  store.flatNestedTreeMap = treeMap
}

const sortList = (evt, treeMap) => {
  console.log('sortList')
  const toId = evt.to.dataset.id

  // 重新排序
  const currentId = treeMap[toId].childIds.splice(evt.oldIndex, 1)[0]
  treeMap[toId].childIds.splice(evt.newIndex, 0, currentId)
}

const moveList = (evt, treeMap) => {
  console.log('moveList')
  const currentId = evt.item.dataset.id
  const toId = evt.to.dataset.id
  const parentId = evt.target.dataset.id

  // 去掉父集下的当前节点
  treeMap[parentId].childIds = treeMap[parentId].childIds.filter(id => id !== currentId)

  // 添加到新的父集下
  treeMap[toId].childIds.splice(evt.newIndex, 0, currentId)
}

// TOTO: 删除节点
// 也可以后期保存前，把所有的节点都遍历一遍，把没有父节点的节点都删除掉
const handleDelect = (id) => {
  const treeMap = cloneDeep(store.flatNestedTreeMap)
  treeMap[props.aid].childIds = treeMap[props.aid].childIds.filter(childId => childId !== id)

  // 更新
  store.flatNestedTreeMap = treeMap
}
</script>

<style lang="less" scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
