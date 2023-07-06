import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import type { Placement } from '@floating-ui/vue'
import Popover from '../../popover'

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

const tooltipProps = {
  content: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'right',
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover',
  },
}

export default defineComponent({
  name: 'Tooltip',
  props: tooltipProps,
  setup(props, { slots }) {
    const renderTooptip = () => (
      <div class='pl-tooltip'>
        {props.content}
      </div>
    )

    return () => (
      <Popover
        v-slots={{
          headless: slots.headless || renderTooptip,
          reference: slots.reference,
        }}
        {...props}
      />
    )
  },
})
