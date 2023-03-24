import type { ExtractPropTypes } from 'vue'

export const tableProps = {
  data: {
    type: Array,
    default: () => [],
  },
}

export type PlTableProps = ExtractPropTypes<typeof tableProps>
