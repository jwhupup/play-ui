import type { Ref } from 'vue'
import { onMounted, ref, watchEffect } from 'vue'

import type { DropdownData, TableConfig, TableHeaderCell, TableProps } from '../../component'
import { copyCell, copyColumn, copyRow } from './copy'

export const dropdownData: DropdownData[] = [
  {
    name: '复制',
    children: [
      {
        name: '复制行',
        callback: () => copyRow(),
        children: [
          { name: '编辑行' },
          { name: '编辑列' },
        ],
      },
      { name: '复制列', callback: () => copyColumn() },
      { name: '复制单元格', callback: () => copyCell() },
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

export const config = ref<TableConfig>({
  striped: false,
  width: 0,
  columns: [],
  data: [],
})

export const genTableConfig = (props: TableProps, el: Ref<HTMLElement | undefined>) => {
  let index = 0
  let totalWidth = 0

  watchEffect(() => {
    config.value.width = props.width ?? 180
    config.value.striped = props.striped ?? false
    config.value.data = props.data
  })
  config.value.columns.length = 0
  genColumnConfig(props.header)

  onMounted(() => {
    const scrollbarWidth = 7
    config.value.columns.forEach((column, index, array) => {
      if (index === array.length - 1) {
        el.value?.style.setProperty(
            `--pl-table-column-${column.index}-width`,
            `${totalWidth > el.value?.clientWidth ? config.value.width : el.value?.clientWidth - totalWidth - scrollbarWidth}px`,
        )
      }
      else {
        totalWidth += column.width ?? config.value.width
        el.value?.style.setProperty(`--pl-table-column-${column.index}-width`, `${column.width ?? config.value.width}px`)
      }
    })
  })

  function genColumnConfig(header: TableHeaderCell[]) {
    header.forEach((cell) => {
      if (cell.children) {
        genColumnConfig(cell.children)
      }
      else {
        cell.index = index++
        config.value.columns.push({ index, ...cell })
      }
    })
  }
}
