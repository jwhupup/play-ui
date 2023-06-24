import type { ExtractPropTypes, PropType } from 'vue'
import { defineComponent, getCurrentInstance } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { useStep } from '../../../composables'
import Button from '../../button'

export interface BreadcrumbItem {
  name: string
  separator?: String
  to: RouteLocationRaw
  icon: string
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

const breadcrumbProps = {
  modelValue: Array as PropType<BreadcrumbItem[]>,
  replace: Boolean,
  separator: {
    type: String,
    default: '/',
  },
}
export default defineComponent({
  name: 'Breadcrumb',
  props: breadcrumbProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { steps, current, toggle } = useStep<BreadcrumbItem>(
      props.modelValue!,
      emit,
    )
    const instance = getCurrentInstance()
    const router = instance?.appContext.config.globalProperties.$router

    const onClick = (index: number, breadcrumb: BreadcrumbItem) => {
      return () => {
        toggle(index)
        if (!breadcrumb.to || !router)
          return
        props.replace
          ? router.replace(breadcrumb.to)
          : router.push(breadcrumb.to)
      }
    }

    return () => (
      <>
        {steps.value?.map((step, index) => (
          <>
            <span v-show={index !== 0}>{props.separator}</span>
            <Button
              size='mini'
              mode='link'
              iconLeft={step.icon}
              state={current.value === index ? 'primary' : 'info'}
              onClick={onClick(index, step)}
            >
              {step.name}
            </Button>
          </>
        ))}
      </>
    )
  },
})
