<template>
  <div ref="tableEl" class="pl-table" @contextmenu.stop="handleTableMenu">
    <div class="pl-table-header" :class="{ 'pl-table-header--fixed': fixedHeader }">
      <HeaderCell v-for="cell in header" :key="cell.name" :content="cell" />
    </div>
    <div class="pl-table-body">
      <Row v-for="(row, index) in data" :key="index">
        <Cell v-for="column in columnConfig" :key="column.name" :content="{ row, column }" />
      </Row>
    </div>
    <ContextMenu :position="position" :target="target">
      <PlButton>dropdown</PlButton>
    </ContextMenu>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import PlButton from '../../button'
import { TABLE_CONFIG_KEY, columnConfig, genColumnConfig, tablesProps } from './tables'
import HeaderCell from './header-cell.vue'
import Cell from './cell.vue'
import Row from './row.vue'
import ContextMenu from './context-menu.vue'

const props = defineProps(tablesProps)
defineOptions({ name: 'Tables' })

genColumnConfig(props.header)

provide(TABLE_CONFIG_KEY, props)

const tableEl = ref<HTMLElement>()
const position = ref({ x: 0, y: 0 })
const target = ref<HTMLElement>()

const handleTableMenu = (e: MouseEvent) => {
  e.preventDefault()
  target.value = e.target as HTMLElement
  position.value.x = e.clientX
  position.value.y = e.clientY
}
</script>
