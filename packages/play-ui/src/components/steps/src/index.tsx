import type { ExtractPropTypes, PropType, Ref } from 'vue'
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
export type StepsProps = ExtractPropTypes<typeof stepsProps>
export type StepsToggleOptions = Pick<StepsItem, 'state' | 'result'>
export type StepsInstance = HTMLElement & {
  current: Ref<number>
  toggle: (stepIndex: number, options: StepsToggleOptions) => any
}

const stepsProps = {
  modelValue: {
    type: Array as PropType<StepsItem[]>,
    require: true,
  },
  vertical: Boolean,
}

export default defineComponent({
  name: 'Steps',
  props: stepsProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { steps, current, toggle: _toggle } = useStep<StepsItem>(props.modelValue!, emit)

    const toggle = (stepIndex: number, options: StepsToggleOptions) => {
      steps.value[stepIndex] = Object.assign(steps.value[stepIndex], options)
      if (steps.value[stepIndex].state !== 'pending') {
        steps.value[stepIndex - 1].state = 'done'
        steps.value[stepIndex - 1].result = 'success'
      }

      if (steps.value[stepIndex].result === 'success' || !steps.value[stepIndex].result)
        steps.value[stepIndex + 1].state = 'processing'

      _toggle(stepIndex)
    }

    useExpose({
      current,
      toggle,
    })

    return () => (
      <div class={['pl-steps', props.vertical && '__vertical']}>
        {steps.value?.map((step, index) => (
          <>
            <div class={['pl-steps-item', props.vertical && '__vertical']}>
              <Button
                mode={
                  step.state === 'processing'
                    ? 'outline'
                    : step.state === 'done'
                      ? 'solid'
                      : 'white'
                }
                state={
                  step.state === 'done'
                    ? step.result === 'exception'
                      ? 'warning'
                      : step.result === 'fail'
                        ? 'danger'
                        : 'success'
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
              <div class={['pl-steps-content', props.vertical && '__vertical']}>
                <div class='pl-steps-item-name'>{step.name}</div>
                <div class='pl-steps-item-description'>{step.description}</div>
              </div>
            </div>
            {index + 1 !== steps.value?.length && <div class={['pl-steps-item-pipe', props.vertical && '__vertical']} />}
          </>
        ))}
      </div>
    )
  },
})
