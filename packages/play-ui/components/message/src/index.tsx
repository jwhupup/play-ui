import { type ExtractPropTypes, type PropType } from 'vue'

import { Transition, computed, createVNode, defineComponent, isVNode, render } from 'vue'
import { isFunction, isObject } from '@vue/shared'
import { globalVars } from '../../globalVars'
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

    const icon = computed(() => {
      if (props.state === 'success')
        return 'check-circle'
      else if (props.state === 'warning')
        return 'exclamation-triangle'
      else if (props.state === 'danger')
        return 'x-circle'

      return 'info-circle'
    })

    props.autoClose && message.close({ delay: 3000 })

    const renderNotification = () => (
      <Alert type='solid' state={props.state} icon={icon.value} description={props.content} closable />
    )

    return () => (
      <Transition
        enter-active-class={animation('slideInDown')}
        leave-active-class={animation('slideOutUp')}
        appear
      >
        {message.state.value ? slots.headless?.()[0] ?? renderNotification() : null}
      </Transition>
    )
  },
})

export default (options?: MessageProps) => {
  if (!globalVars.messagesContainer) {
    globalVars.messagesContainer = document.createElement('div')
    globalVars.messagesContainer.className = 'pl-message-container'
    document.body.appendChild(globalVars.messagesContainer)
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
  globalVars.messagesContainer.appendChild(container.firstChild!)
}
