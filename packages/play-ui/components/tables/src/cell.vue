<template>
  <div class="pl-table-cell">
    <div class="pl-table-cell-content" :style="getColumnWidthCssVar">
      <span>
        {{ content.row[content.column.key!] }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResizeColumnWidth } from './resize'
import { cellProps } from './tables'

const props = defineProps(cellProps)

const { getColumnWidthCssVar } = useResizeColumnWidth(props.content.column)
</script>
