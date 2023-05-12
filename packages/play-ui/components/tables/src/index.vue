<template>
  <div ref="tableEl" class="pl-table">
    <div class="pl-table-header" :class="{ 'pl-table-header--fixed': fixedHeader }">
      <HeaderCell v-for="cell in header" :key="cell.name" :content="cell" />
    </div>
    <PlDropdown :data="menus" trigger="contextmenu" custom-position>
      <div class="pl-table-body">
        <Row v-for="(row, index) in data" :key="index">
          <Cell v-for="column in columnConfig" :key="column.name" :content="{ row, column }" />
        </Row>
      </div>
    </PlDropdown>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import type { DropdownData } from '../../dropdown'
import PlDropdown from '../../dropdown'
import { TABLE_CONFIG_KEY, columnConfig, genColumnConfig, tablesProps } from './tables'
import HeaderCell from './header-cell.vue'
import Cell from './cell.vue'
import Row from './row.vue'

const props = defineProps(tablesProps)

defineOptions({ name: 'Tables' })

genColumnConfig(props.header)

provide(TABLE_CONFIG_KEY, props)

const menus: DropdownData[] = [
  {
    name: '复制',
    children: [
      { name: '复制行' },
      { name: '复制列' },
    ],
  },
  {
    name: '编辑',
    children: [
      { name: '编辑行' },
      { name: '编辑列' },
    ],
  },
]
</script>
