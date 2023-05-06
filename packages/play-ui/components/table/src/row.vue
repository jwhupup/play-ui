<template>
  <template v-for="row in data" :key="row.__metadata__.key">
    <div class="pl-table-row">
      <Cell v-if="selectable">
        <PlCheckbox v-model="row.__metadata__.selected" @change="indeterminate = false" />
      </Cell>
      <Cell v-for="col in head" :key="col.key" v-model="row[col.key]" />
    </div>
    <template v-if="row.children">
      <Row :head="head" :data="row.children" :selectable="selectable" />
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlCheckbox from '../../checkbox'
import Cell from './cell.vue'
import { indeterminate } from './selectable'
import { tableProps } from './table'

export default defineComponent({
  name: 'Row',
  components: {
    Cell,
    PlCheckbox,
  },
  props: tableProps,
  setup() {
    return {
      indeterminate,
    }
  },
})
</script>
