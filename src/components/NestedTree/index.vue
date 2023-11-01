<template>
  <Draggable
    class="dragArea"
    :list="tasks"
    group="people" 
    item-key="id"
    tag="ul"
    >
    <template #item="{element}">
      <li>
        <input type="text" v-model="element.name" style="margin-top:10px">
        <NestedTree :tasks="element.children" />
      </li>
    </template>
  </Draggable>
</template>

<script setup>
  import Draggable from 'vuedraggable'

  defineOptions({ 
    name: 'NestedTree',
  })

  const props = defineProps({
    tasks: {
      type: Array,
      required: true
    }
  })

  defineEmits(['update:modelValue'])
</script>

<style lang="less" scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>