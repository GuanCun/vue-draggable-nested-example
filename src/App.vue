<template>
  <a-tabs default-active-key="3">
    <a-tab-pane key="1" title="1.树形嵌套">
      <NestedTree :tasks="nestedTreeArray" />

      <pre>
        {{ nestedTreeArray }}
      </pre>
    </a-tab-pane>
    <a-tab-pane key="2" title="2.树状结构">
      Content of Tab Panel 2
    </a-tab-pane>
    <a-tab-pane key="3" title="3.结构扁平">
      <FlatNestedTree aid="root" data-id="root" />

      <pre>
        {{ store.flatNestedTreeMap }}
      </pre>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
  import { ref } from 'vue';
  import NestedTree from './components/NestedTree/index.vue';
  import FlatNestedTree from './components/FlatNestedTree/index.vue';
  import { store } from './components/FlatNestedTree/flatTreeStore';
  const nestedTreeArray = ref([{
    name: 'John1',
    id: 1,
    children: [{
      name: 'John1.1',
      id: 11,
      children: []
    }, {
      name: 'John1.2',
      id: 12,
      children: []
    }]
  }, {
    name: 'Joao2',
    id: 2,
    children: [{
      name: 'Joao2.1',
      id: 21,
      children: []
    }, {
      name: 'Joao2.2',
      id: 22,
      children: []
    }]
  }, {
    name: 'Jean3',
    id: 3,
    children: [{
      name: 'Jean3.1',
      id: 31,
      children: []
    }, {
      name: 'Jean3.2',
      id: 32,
      children: []
    }]
  }])
</script>

<style scoped>

</style>
