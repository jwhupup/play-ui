import type { PropType, Ref } from 'vue'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { useCount, useExpose } from '../../../composables'
import { range } from '../../../utils'
import type { ButtonShape, ButtonType } from '../../button'
import Button from '../../button'

export type PaginationInstance = HTMLElement & {
  current: Ref<number>
  prev: (step?: number) => any
  next: (step?: number) => any
  toggle: (value?: number) => any
}

export default defineComponent({
  name: 'Pagination',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    showCount: {
      type: Number,
      default: 7,
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'ghost',
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'rounded',
    },
  },
  setup(props) {
    const count = computed(() => range(2, props.count - 1, 1))
    const max = computed(() => count.value.length + 2)

    const {
      count: current,
      add: next,
      sub: prev,
      update: toggle,
    } = useCount({
      initial: 1,
      min: 1,
      max,
    })

    useExpose({
      current,
      next,
      prev,
      toggle,
    })

    const start = ref(0)
    const end = ref(props.showCount - 3)
    const isShowLeftFold = computed(() => current.value * 2 - 1 > props.showCount)
    const isShowRightFold = computed(() => (props.count - current.value) * 2 - 1 >= props.showCount)
    const onPrev = () => prev()
    const onNext = () => next()
    const onStepPrev = () => prev(end.value - start.value - 1)
    const onStepNext = () => next(end.value - start.value)
    const onPageNo = (no: number) => () => current.value = no
    const onToggle = (evt: FocusEvent) => {
      toggle(parseInt((evt.target as HTMLInputElement).value))
    }

    watchEffect(() => {
      if (isShowLeftFold.value && isShowRightFold.value) {
        const currentIndex = count.value.findIndex(value => value === current.value)
        const float = (props.showCount - 3) / 2
        start.value = currentIndex - float
        end.value = currentIndex + float + 1
      }
      else if (isShowLeftFold.value) {
        start.value = count.value.length - props.showCount + 1
        end.value = count.value.length
      }
      else if (isShowRightFold.value) {
        start.value = 0
        end.value = props.showCount - 2
      }
    })

    return () => (
      <div v-show={props.count > 1}>
        <Button
          size='mini'
          state='info'
          iconLeft='chevron-left'
          type={props.type}
          shape={props.shape}
          onClick={onPrev}
        />
        <Button
          size='mini'
          type={props.type}
          shape={props.shape}
          state={current.value === 1 ? 'primary' : 'info'}
          onClick={onPageNo(1)}
        >
          1
        </Button>
        <Button
          size='mini'
          state='info'
          iconLeft='three-dots'
          type={props.type}
          shape={props.shape}
          v-show={isShowLeftFold.value}
          onClick={onStepPrev}
        />
        {
          count.value
            ?.slice(start.value, end.value)
            .map(pageNo => (
              <Button
                size='mini'
                type={props.type}
                shape={props.shape}
                state={current.value === pageNo ? 'primary' : 'info'}
                onClick={onPageNo(pageNo)}
              >
                {pageNo}
              </Button>
            ))
        }
        <Button
          size='mini'
          state='info'
          iconLeft='three-dots'
          type={props.type}
          shape={props.shape}
          v-show={isShowRightFold.value}
          onClick={onStepNext}
        />
        <Button
          size='mini'
          type={props.type}
          shape={props.shape}
          state={current.value === props.count ? 'primary' : 'info'}
          onClick={onPageNo(props.count)}
        >
          {props.count}
        </Button>
        <Button
          size='mini'
          state='info'
          iconLeft='chevron-right'
          type={props.type}
          shape={props.shape}
          onClick={onNext}
        />
        to <input type="number" onBlur={onToggle} />
      </div>
    )
  },
})
