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

export type PlTableProps = ExtractPropTypes<typeof tableProps>
