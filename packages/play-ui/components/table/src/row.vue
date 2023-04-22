<template>
  <template v-for="row in data" :key="row.__row_key">
    <div class="pl-table-row">
      <Cell>
        <PlCheckbox v-model="row.__row_selected" :value="row" @change="handleSelect" />
      </Cell>
      <Cell v-for="col in head" :key="col.key" v-model="row[col.key]" />
    </div>
    <template v-if="row.children">
      <Row :head="head" :data="row.children" />
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PlCheckbox from '../../checkbox'
import Cell from './cell.vue'
import { indeterminate } from './table'

export default defineComponent({
  name: 'Row',
  components: {
    Cell,
    PlCheckbox,
  },
  props: ['head', 'data'],
  setup() {
    const handleSelect = () => {
      indeterminate.value = false
    }
    return {
      handleSelect,
    }
  },
})
</script>
