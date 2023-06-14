import { type ExtractPropTypes, type PropType, Transition, computed, defineComponent, onMounted, ref, watchEffect } from 'vue'
import { type Instance, type Placement, createPopper } from '@popperjs/core'
import { useOutside } from '../../../composables'

export type PopoverProps = ExtractPropTypes<typeof popoverProps>

const popoverProps = {
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
  name: 'Popover',
  props: popoverProps,
  setup(props, { slots }) {
    let timer: NodeJS.Timeout
    let flag = true
    let popperInstance: Instance
    const visible = ref(false)
    const popover = ref<HTMLElement>()
    const popoverBtn = ref<HTMLElement>()
    const popoverContainer = ref<HTMLElement>()

    onMounted(() => {
      popperInstance = createPopper(popoverBtn.value!, popover.value!, {
        placement: props.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      })
    })

    const visibleControl = (enabled: boolean) => {
      visible.value = enabled
      popperInstance.setOptions(options => ({
        ...options,
        modifiers: [
          ...options.modifiers!,
          { name: 'eventListeners', enabled },
        ],
      }))
      enabled && popperInstance.update()
    }

    const onClick = () => {
      if (!visible.value)
        visibleControl(!visible.value)
    }

    const onBtnClick = (evt: MouseEvent) => {
      if (props.trigger === 'click') {
        evt.stopPropagation()
        visibleControl(!visible.value)
      }
    }

    const onMouseenter = () => {
      flag = false
      visibleControl(true)
    }

    const onMouseleave = () => {
      flag = true
      timer = setTimeout(() => {
        clearTimeout(timer)
        flag && visibleControl(false)
      }, 300)
    }

    const eventProps = computed(() => {
      if (props.trigger === 'hover')
        return { onMouseenter, onMouseleave }

      const { isOutside } = useOutside(popoverContainer, visible)
      watchEffect(() => isOutside.value && (visible.value = false))
      return { onClick }
    })

    const renderPopover = () => (
      <>
        <div>{props.title}</div>
        <div>{props.content}</div>
      </>
    )

    return () => (
      <div
        class={'pl-popover'}
        ref={popoverContainer}
        {...eventProps.value}
      >
        <Transition
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster"
          appear
        >
          <div
            id="pl-popover"
            ref={popover}
            v-show={visible.value}
            class={!slots.headless && 'pl-popover-content'}
          >
            {slots.headless?.() || slots.default?.() || renderPopover()}
            {slots.headless ? null : <div id="pl-popover-arrow" data-popper-arrow />}
          </div>
        </Transition>
        <div
          class={'pl-popover-reference'}
          ref={popoverBtn}
          onClick={onBtnClick}
        >
          {slots.reference?.()}
        </div>
      </div>
    )
  },
})
