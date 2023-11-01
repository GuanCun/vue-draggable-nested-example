import { reactive } from 'vue'

export const store = reactive({
  flatNestedTreeMap: {
    'root': {
      name: 'name_root',
      childIds: ['0-1', '0-2']
    },
    '0-1': {
      name: 'name_0-1',
      childIds: ['1-1', '1-2']
    },
    '1-1': {
      name: 'name_1-1',
      childIds: []
    },
    '1-2': {
      name: 'name_1-2',
      childIds: []
    },
    '0-2': {
      name: 'name_0-2',
      childIds: []
    }
  }
})