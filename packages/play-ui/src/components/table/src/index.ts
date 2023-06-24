import type { Ref } from 'vue'
import { onMounted, ref, watchEffect } from 'vue'

export interface TableProps {
  width?: number
  header: TableHeaderCell[]
  data: Record<string, any>[]
  fixedHeader?: boolean
  striped?: boolean
  border?: boolean
}

export interface TableConfig {
  striped: boolean
  width: number
  columns: TableHeaderCell[]
  data: Record<string, any>[]
}

export interface TableHeaderCell {
  name: string
  key?: string
  width?: number
  index?: number
  children?: TableHeaderCell[]
}

export interface TableHeaderCellProps {
  data: TableHeaderCell
}

export interface TableCellProps {
  data: any
}

export interface TableRowProps {
  data: Record<string, any>[]
}

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
