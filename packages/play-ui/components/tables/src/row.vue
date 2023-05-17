<template>
  <template v-for="(row, rowIndex) in data" :key="rowIndex">
    <div
      class="pl-table-row"
      :class="{ 'pl-table-row--striped': config.striped }"
    >
      <Cell
        v-for="(col, colIndex) in config.columns"
        :key="colIndex"
        :data="row[col.key!]"
        :style="`width: var(--pl-table-column-${colIndex}-width);`"
        @contextmenu="handelCopy(row, col.key!, row[col.key!])"
      />
    </div>
    <template v-if="row.children">
      <Row :data="row.children" />
    </template>
  </template>
</template>

<script setup lang="ts">
import type { TableRowProps } from '../../component'
import { handelCopy } from './copy'
import { config } from './table'
import Cell from './cell.vue'
import Row from './row.vue'

defineProps<TableRowProps>()

defineOptions({ name: 'Row' })
</script>
