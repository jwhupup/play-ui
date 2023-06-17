import type { PropType, Ref } from 'vue'
import { defineComponent } from 'vue'
import { useExpose, useStep } from '../../../composables'
import Button from '../../button'
import Icon from '../../icon'

export interface StepsItem {
  name: string
  description?: string
  icon?: string
  state?: 'pending' | 'processing' | 'done'
  result?: 'success' | 'fail' | 'exception'
}
export type StepsToggleOptions = Pick<StepsItem, 'state' | 'result'>
export type StepsInstance = HTMLElement & {
  current: Ref<number>
  toggle: (stepIndex: number, options: StepsToggleOptions) => any
}

export default defineComponent({
  name: 'Steps',
  props: {
    modelValue: {
      type: Array as PropType<StepsItem[]>,
      require: true,
    },
    vertical: Boolean,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { steps, current, toggle: _toggle } = useStep<StepsItem>(props.modelValue!, emit)

    const toggle = (stepIndex: number, options: StepsToggleOptions) => {
      steps.value[stepIndex] = Object.assign(steps.value[stepIndex], options)
      _toggle(stepIndex)
    }

    useExpose({
      current,
      toggle,
    })

    return () => (
      <div class='pl-steps'>
        {steps.value?.map((step, index) => (
          <>
            <div class='pl-steps-item'>
              <Button
                type={
                  step.state === 'processing'
                    ? 'outline'
                    : step.state === 'done'
                      ? 'solid'
                      : 'white'
                }
                state={
                  step.state === 'done'
                    ? step.result === 'success'
                      ? 'success'
                      : step.result === 'fail'
                        ? 'danger'
                        : 'warning'
                    : 'primary'
                }
                size='small'
                shape='circle'
              >
                {
                  step.icon
                    ? <Icon name={step.icon} />
                    : index + 1
                }
              </Button>
              <div class='pl-steps-content'>
                <div class='pl-steps-item-name'>{step.name}</div>
                <div class='pl-steps-item-description'>{step.description}</div>
              </div>
            </div>
            {index + 1 !== steps.value?.length && <div class='pl-steps-item-pipe' />}
          </>
        ))}
      </div>
    )
  },
})
