import { type ExtractPropTypes, type PropType } from 'vue'
import { Transition, computed, createVNode, defineComponent, isVNode, render } from 'vue'
import { isFunction, isObject } from '@vue/shared'
import { useToggle } from '../../../composables'
import { animation } from '../../../utils'
import { type ComponentState } from '../../component'
import Alert from '../../alert'

type ShakeOffProp = 'x-button'
export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>

const messageProps = {
  content: String,
  shakeOff: {
    type: Array as PropType<ShakeOffProp[]>,
    default: () => [],
  },
  state: {
    type: String as PropType<Exclude<ComponentState, 'primary'>>,
    default: 'info',
  },
  autoClose: {
    type: Boolean,
    default: true,
  },
}

export const MessageConstructor = defineComponent({
  name: 'Message',
  props: messageProps,
  setup(props, { slots }) {
    const message = useToggle()

    message.open()

    props.autoClose && message.close({ delay: 3000 })

    const icon = computed(() => {
      const icons = {
        info: 'info-circle',
        success: 'check-circle',
        warning: 'exclamation-triangle',
        danger: 'x-circle',
      }
      return icons[props.state]
    })

    const renderNotification = () => (
      <Alert
        mode='solid'
        icon={icon.value}
        state={props.state}
        description={props.content}
        closable
      />
    )

    return () => (
      <Transition
        enter-active-class={animation('slideInDown')}
        leave-active-class={animation('slideOutUp')}
        appear
      >
        {
          message.state.value
            ? slots.headless?.()[0]
              ?? renderNotification()
            : null
        }
      </Transition>
    )
  },
})

let messagesContainer: HTMLDivElement | null = null

export default (options?: MessageProps) => {
  if (!messagesContainer) {
    messagesContainer = document.createElement('div')
    messagesContainer.className = 'pl-message-container'
    document.body.appendChild(messagesContainer)
  }
  const vm = createVNode(
    MessageConstructor,
    isObject(options) ? { ...options } : null,
    (isFunction(options) || isVNode(options))
      ? {
          headless: isFunction(options)
            ? options
            : () => options,
        }
      : null,
  )
  const container = document.createElement('div')
  render(vm, container)
  messagesContainer.appendChild(container.firstChild!)
}
