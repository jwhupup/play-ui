import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export const tablesProps = {
  header: {
    type: Array as PropType<PlTableColumnConfig[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
  columnResizable: Boolean,
  fixedHeader: Boolean,
}

export const headerCellProps = {
  content: {
    type: Object as PropType<PlTableColumnConfig>,
    default: () => ({}),
  },
}

export const cellProps = {
  content: {
    type: Object as PropType<{ column: PlTableColumnConfig; row: Record<string, any> }>,
    default: () => ({}),
  },
}

export const columnConfig: PlTableColumnConfig[] = []

export const genColumnConfig = (data: PlTableColumnConfig[]) => {
  columnConfig.length = 0
  core(data)
  // addGroupName(data)

  function core(data: PlTableColumnConfig[]) {
    data.forEach((column) => {
      if (column.children)
        core(column.children)
      else
        columnConfig.push(column)
    })
  }

  // function addGroupName(data: PlTableColumnConfig[]) {
  //   data.forEach((parent, index) => {
  //     if (parent.children) {
  //       parent.children.forEach((sub) => {
  //         sub.group = parent.group
  //         sub.index = parent.index || index
  //       })
  //       addGroupName(parent.children)
  //     }
  //   })
  // }
}

export const TABLE_CONFIG_KEY: InjectionKey<PlTablesProps> = Symbol('pl-table-config')

export interface PlTableColumnConfig {
  name: string
  key?: string
  width?: number
  children?: PlTableColumnConfig[]
}

export type PlTablesProps = ExtractPropTypes<typeof tablesProps>
