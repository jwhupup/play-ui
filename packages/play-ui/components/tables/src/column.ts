import type { InjectionKey } from 'vue'
import type { TableColumnConfig, TablesProps } from '../../component'

export const TABLE_CONFIG_KEY: InjectionKey<TablesProps> = Symbol('pl-table-config')

export const columnConfig: TableColumnConfig[] = []

export const genColumnConfig = (data: TableColumnConfig[]) => {
  columnConfig.length = 0
  core(data)
  // addGroupName(data)

  function core(data: TableColumnConfig[]) {
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
