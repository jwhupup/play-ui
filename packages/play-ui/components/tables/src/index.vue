<template>
  <div ref="tableEl" class="pl-table" :class="{ 'pl-table--border': !border }">
    <div
      class="pl-table-header"
      :class="{ 'pl-table-header--fixed': fixedHeader }"
    >
      <HeaderCell v-for="(cell, index) in header" :key="index" :data="cell" />
    </div>
    <Dropdown :data="dropdownData" trigger="contextmenu" custom-position>
      <div class="pl-table-body">
        <Row :data="data" />
      </div>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from '../../dropdown/src/index.vue'
import type { TableProps } from '../../component'
import { dropdownData, genTableConfig } from './table'
import HeaderCell from './header-cell.vue'
import Row from './row.vue'

const props = defineProps<TableProps>()

defineOptions({ name: 'Tables' })

const tableEl = ref<HTMLElement>()

genTableConfig(props, tableEl)
</script>
