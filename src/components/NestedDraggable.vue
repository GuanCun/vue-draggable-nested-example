<template>
  123
</template>
<!-- <template>
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
        <NestedDraggable :tasks="element.children" aid="element"/>
      </li>
    </template>
  </Draggable>
</template>

<script setup>
  import Draggable from 'vuedraggable'
aaa
  const props = defineProps({
    aid
    tasks: {
      type: Array,
      required: true
    }
  })

  const items = aaa[aid]

  items.children

  defineEmits(['update:modelValue'])
</script>

<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style> -->
