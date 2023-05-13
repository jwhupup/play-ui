<template>
  <div class="pl-table-cell">
    <div class="pl-table-cell-content" :class="{ 'pl-table-cell-parent': content.children }" :style="getColumnWidthCssVar">
      <span>
        {{ content.name }}
      </span>
      <div v-if="!content.children && tableConfig?.columnResizable" class="pl-table-column--resize" @mousedown="handleResizeColumnWidth($event, content.key!)" />
    </div>
    <div v-if="content.children" class="pl-table-cell-children">
      <HeaderCell v-for="childCell in content.children" :key="childCell.name" :content="childCell" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { HeaderCellProps } from '../../component'
import { TABLE_CONFIG_KEY } from './column'
import { useResizeColumnWidth } from './resize'

export default defineComponent({
  name: 'HeaderCell',
})
</script>

<script setup lang="ts">
const props = defineProps<HeaderCellProps>()

const tableConfig = inject(TABLE_CONFIG_KEY, null)

const { setColumnWidthCssVar, getColumnWidthCssVar, handleResizeColumnWidth } = useResizeColumnWidth(props.content)

setColumnWidthCssVar()
</script>
