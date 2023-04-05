import type { ExtractPropTypes, PropType } from 'vue'

export const tableProps = {
  head: {
    type: Array as PropType<{ lable: string; prop: string }[]>,
    default: () => [],
  },
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
}

export type PlTableProps = ExtractPropTypes<typeof tableProps>
