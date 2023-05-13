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
import type { CellProps } from '../../component'
import { useResizeColumnWidth } from './resize'

const props = defineProps<CellProps>()

const { getColumnWidthCssVar } = useResizeColumnWidth(props.content.column)
</script>
