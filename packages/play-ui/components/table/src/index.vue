<template>
  <div class="pl-table">
    <div class="pl-table-head">
      <div class="pl-table-row">
        <Cell>
          <PlCheckbox v-model="isAllSelected" :indeterminate="indeterminate" @change="handleSelectAll" />
        </Cell>
        <Cell v-for="col in head" :key="col.key" v-model="col.name" />
      </div>
    </div>
    <div class="pl-table-body">
      <Row :head="head" :data="tableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import PlCheckbox from '../../checkbox'
import { indeterminate, isAllSelected, tableProps, wrapTableData } from './table'
import Row from './row.vue'
import Cell from './cell.vue'

const props = defineProps(tableProps)

const tableData = computed(() => {
  wrapTableData(props.data, { level: 0 })
  // console.log(props.data)

  return props.data
})

const switchSelectedAllState = (data: any[]) => {
  for (const item of data) {
    if (item.__row_selected)
      isAllSelected.value = true

    else
      indeterminate.value = true

    if (item.children)
      switchSelectedAllState(item.children)
  }
}

const selectAll = (data: any[], state: boolean) => {
  data.forEach((item) => {
    item.__row_selected = state
    if (item.children)
      selectAll(item.children, state)
  })
}

watch(props.data, () => switchSelectedAllState(props.data))

const handleSelectAll = (selected: boolean) => {
  indeterminate.value = false
  selectAll(props.data, selected)
}
</script>
