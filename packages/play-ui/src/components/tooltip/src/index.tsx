import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import type { Placement } from '@floating-ui/vue'
import Popover from '../../popover'

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

const tooltipProps = {
  title: String,
  content: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'auto',
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover',
  },
}

export default defineComponent({
  name: 'Tooltip',
  props: {
    content: String,
    placement: {
      type: String as PropType<Placement>,
      default: 'auto',
    },
  },
  setup(props, { slots }) {
    const renderTooptip = () => (
      <div class='pl-tooltip'>
        {props.content}
      </div>
    )

    return () => (
      <Popover
        v-slots={
          {
            headless: slots.headless || renderTooptip,
            reference: slots.reference,
          }
        }
        {...props}
      />
    )
  },
})
