import type { ExtractPropTypes, PropType } from 'vue'
import { ref } from 'vue'

export const isAllSelected = ref(false)
export const indeterminate = ref(true)

export const tableProps = {
  head: {
    type: Array as PropType<{ name: string; key: string }[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
}

export const wrapTableData = (data: any[], level: number) => {
  data.forEach((item, index) => {
    item.__row_selected = false
    item.__row_level = level
    item.__row_key = `${level}-${index}`
    if (item.children)
      wrapTableData(item.children, level + 1)
  })
  return data
}

export type PlTableProps = ExtractPropTypes<typeof tableProps>
