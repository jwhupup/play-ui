import type { ExtractPropTypes, PropType } from 'vue'
import { Transition, computed, defineComponent, ref, watch, watchEffect } from 'vue'
import type { Placement } from '@floating-ui/vue'
import { arrow, autoUpdate, flip, inline, offset, shift, useFloating } from '@floating-ui/vue'
import { animation, isBoolean } from '../../../utils'
import { useOutside } from '../../../composables'

export type PopoverProps = ExtractPropTypes<typeof popoverProps>

const popoverProps = {
  title: String,
  content: String,
  placement: {
    type: String as PropType<Placement>,
    default: 'right',
  },
  trigger: {
    type: [String, Boolean] as PropType<'hover' | 'click' | boolean>,
    default: 'hover',
  },
}

export default defineComponent({
  name: 'Popover',
  props: popoverProps,
  setup(props, { slots }) {
    let flag = true
    let timer: NodeJS.Timeout
    const popperPlacement = ref('')
    const visible = ref(false)
    const reference = ref<HTMLElement>()
    const popover = ref<HTMLElement>()
    const popoverArrow = ref<HTMLElement>()
    const popoverContainer = ref<HTMLElement>()

    const { floatingStyles, middlewareData, placement } = useFloating(reference, popover, {
      placement: props.placement,
      middleware: [
        inline(),
        offset(8),
        flip(),
        shift({ crossAxis: true }),
        arrow({ element: popoverArrow }),
      ],
      whileElementsMounted(...args) {
        const cleanup = autoUpdate(...args, { animationFrame: true })
        return cleanup
      },
    })

    const style = computed(() => {
      return Object.assign(floatingStyles.value, {
        width: '100%',
        zIndex: 999,
      })
    })

    watchEffect(() => {
      if (isBoolean(props.trigger))
        visible.value = props.trigger
    })

    watch(middlewareData, () => {
      if (middlewareData.value.arrow && popoverContainer.value && popoverArrow.value) {
        const { x, y } = middlewareData.value.arrow

        let arrowPlacement = {}
        switch (placement.value) {
          case 'top':
            popperPlacement.value = placement.value
            arrowPlacement = { bottom: '-4px' }
            break
          case 'bottom':
            popperPlacement.value = placement.value
            arrowPlacement = { top: '-4px' }
            break
          case 'left':
            popperPlacement.value = placement.value
            arrowPlacement = { right: '-4px' }
            break
          case 'right':
            popperPlacement.value = placement.value
            arrowPlacement = { left: '-4px' }
            break
          default:
            break
        }
        Object.assign(popoverArrow.value.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
          ...arrowPlacement,
        })
      }
    })

    const onClick = () => {
      if (!isBoolean(props.trigger) && !visible.value)
        visible.value = true
    }

    const onMouseenter = () => {
      flag = false
      visible.value = true
    }

    const onMouseleave = () => {
      flag = true
      timer = setTimeout(() => {
        clearTimeout(timer)
        visible.value = !flag
      }, 300)
    }

    const onReferenceClick = (evt: MouseEvent) => {
      if (props.trigger === 'click') {
        evt.stopPropagation()
        visible.value = !visible.value
      }
    }

    const eventProps = computed(() => {
      if (props.trigger === 'hover') {
        return {
          onMouseenter,
          onMouseleave,
        }
      }
      const { isOutside } = useOutside(popoverContainer, visible)
      watchEffect(() => isOutside.value && (visible.value = false))
      return {
        onClick,
      }
    })

    const renderPopover = () => (
      <>
        <div>{props.title}</div>
        <div>{props.content}</div>
      </>
    )

    return () => (
      <div
        style='position: relative'
        ref={popoverContainer}
        {...eventProps.value}
      >
        <Transition
          enter-active-class={animation('fadeIn')}
          leave-active-class={animation('fadeOut')}
          appear
        >
          {visible.value && <div
            id="pl-popover"
            ref={popover}
            style={style.value}
            data-popper-placement={popperPlacement.value}
            class={!slots.headless && 'pl-popover-content'}
          >
            {slots.headless?.() || slots.default?.() || renderPopover()}
            {
              slots.headless
                ? null
                : <div
                    id="pl-popover-arrow"
                    ref={popoverArrow}
                    data-popper-arrow
                  />
            }
          </div>}
        </Transition>
        <div
          class='pl-popover-reference'
          ref={reference}
          onClick={onReferenceClick}
        >
          {slots.reference?.()}
        </div>
      </div>
    )
  },
})
