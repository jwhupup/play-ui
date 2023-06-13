<template>
  <div class="pl-table-header-cell" :style="columnWidth">
    <div class="pl-table-cell">
      {{ data.name }}
    </div>
    <div v-if="data.children" class="pl-table-header-cell-children">
      <HeaderCell
        v-for="childCell in data.children"
        :key="childCell.name"
        :data="childCell"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TableHeaderCellProps } from '../../component'
import HeaderCell from './header-cell.vue'

const props = defineProps<TableHeaderCellProps>()

defineOptions({ name: 'HeaderCell' })

const columnWidth = computed(() => {
  if (!props.data.children)
    return `width: var(--pl-table-column-${props.data.index}-width);`

  return ''
})
</script>
