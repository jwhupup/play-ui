import type { ExtractPropTypes, PropType } from 'vue'
import { ref } from 'vue'

interface RowOptions {
  level?: number
  selected?: boolean
}

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

export const wrapTableData = (data: any[], options: RowOptions) => {
  const { level = 0, selected = false } = options
  data.forEach((item, index) => {
    item.__row_selected = selected
    item.__row_level = level
    item.__row_key = `${level}-${index}`
    if (item.children)
      wrapTableData(item.children, { level: level + 1, selected })
  })
}

export type PlTableProps = ExtractPropTypes<typeof tableProps>
