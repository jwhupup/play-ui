<template>
  <div ref="tableEl" class="pl-table" :class="{ 'pl-table--border': !border }">
    <div
      class="pl-table-header"
      :class="{ 'pl-table-header--fixed': fixedHeader }"
    >
      <HeaderCell v-for="(cell, index) in header" :key="index" :data="cell" />
    </div>
    <div class="pl-table-body">
      <Row :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderCell from './header-cell.vue'
import Row from './row.vue'
import type { TableProps } from '.'
import { genTableConfig } from '.'

const props = defineProps<TableProps>()

defineOptions({ name: 'Tables' })

const tableEl = ref<HTMLElement>()

genTableConfig(props, tableEl)
</script>
