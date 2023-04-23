import type { ExtractPropTypes, PropType } from 'vue'

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

export const withMetadata = (data: any[], level = 0) => {
  data.forEach((item, index) => {
    item.__metadata__ = {
      level,
      selected: false,
      key: `${level}-${index}`,
    }
    if (item.children)
      withMetadata(item.children, level + 1)
  })
  return data
}

export type PlTableProps = ExtractPropTypes<typeof tableProps>
