import type { ExtractPropTypes } from 'vue'
export const iconProps = {
  name: {
    type: String,
    require: true,
  },
}

export type PlIconProps = ExtractPropTypes<typeof iconProps>
