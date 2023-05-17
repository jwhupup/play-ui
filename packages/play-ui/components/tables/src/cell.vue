<template>
  <div class="pl-table-cell">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import type { TableCellProps } from '../../component'

defineProps<TableCellProps>()
</script>
