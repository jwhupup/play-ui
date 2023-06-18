import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useStep } from '../../../composables'
import Button from '../../button'

export interface BreadcrumbItem {
  name: string
  separator?: String
}
export default defineComponent({
  name: 'Breadcrumb',
  props: {
    modelValue: Array as PropType<BreadcrumbItem[]>,
    separator: {
      type: String as PropType<'/' | '>'>,
      default: '/',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { steps, current } = useStep<BreadcrumbItem>(props.modelValue!, emit)

    return () => (
      <div style={'display: flex;'}>
        {steps.value?.map((step, index) => (
            <>
              <div v-show={index !== 0}>{props.separator}</div>
              <Button size='mini' type='link' state={current.value === index ? 'primary' : 'info'}>{step.name}</Button>
            </>
        ))}
      </div>
    )
  },
})
