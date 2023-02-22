import type { ExtractPropTypes } from 'vue'
export const iconProps = {
  name: {
    type: String,
    require: true,
  },
}

export type IconProps = ExtractPropTypes<typeof iconProps>
