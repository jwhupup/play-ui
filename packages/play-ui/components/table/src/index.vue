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
import { computed } from 'vue'
import PlCheckbox from '../../checkbox'
import { tableProps, wrapTableData } from './table'
import Row from './row.vue'
import Cell from './cell.vue'
import { useSelectable } from './useSelectable'

const props = defineProps(tableProps)

const tableData = computed(() => wrapTableData(props.data, 0))

const { isAllSelected, indeterminate, handleSelectAll } = useSelectable(props.data)
</script>
