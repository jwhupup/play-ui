import { Transition, computed, createVNode, defineComponent, isVNode, render } from 'vue'
import { type ExtractPropTypes, type PropType } from 'vue'
import { isFunction, isObject } from '@vue/shared'
import { animation, uppercaseFirstWord } from '../../../utils'
import { type ComponentState } from '../../component'
import { type ToggleHandler } from '../../../composables'
import { useToggle } from '../../../composables'
import { globalVars } from '../../globalVars'
import Button from '../../button'
import Icon from '../../icon'

type ShakeOffProp = 'x-button' | 'icon' | 'title'
export type NotificationProps = Partial<ExtractPropTypes<typeof notificationProps>>
export type NotificationHandler = Pick<ToggleHandler, 'state' | 'open' | 'close'>

const notificationProps = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  onCancel: Function as PropType<(handler: NotificationHandler) => any>,
  onConfirm: Function as PropType<(handler: NotificationHandler) => any>,
  state: String as PropType<Exclude<ComponentState, 'primary'>>,
  autoClose: {
    type: Boolean,
    default: true,
  },
  shakeOff: {
    type: Array as PropType<ShakeOffProp[]>,
    default: () => [],
  },
  placement: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
}

export const NotificationConstructor = defineComponent({
  name: 'Notification',
  props: notificationProps,
  setup(props, { slots }) {
    const notify = useToggle() as NotificationHandler

    notify.open()

    props.autoClose && notify.close({ delay: 3000 })

    const animate = computed(() => uppercaseFirstWord(props.placement))

    const isShake = (prop: ShakeOffProp) => props.shakeOff.includes(prop)

    const onCancel = () => props.onCancel?.(notify)

    const onConfirm = () => props.onConfirm?.(notify)

    const renderNotification = () => (
      <div
        class={'pl-notification'}
      >
        {isShake('icon') || <Icon name='bell' />}
        <main>
          {isShake('x-button') || <Button class={'pl-notification-close'} type='link' state='info' icon-left={'x-lg'} onClick={notify.close} />}
          {isShake('title') || <h3 class={'pl-notification-title'}>{props.title}</h3>}
          <div class={'pl-notification-content'}>{props.content}</div>
          {props.cancelButtonText && <Button type='link' onClick={onCancel}>{props.cancelButtonText}</Button>}
          {props.confirmButtonText && <Button type='link' onClick={onConfirm}>{props.confirmButtonText}</Button>}
        </main>
      </div>
    )

    return () => (
      <Transition
        enter-active-class={animation(`slideIn${animate.value}`)}
        leave-active-class={animation(`zoomOut${animate.value}`)}
        appear
      >
        {notify.state.value ? slots.headless?.()[0] ?? renderNotification() : null}
      </Transition>
    )
  },
})

export default (options?: NotificationProps) => {
  if (!globalVars.notificationsContainer) {
    globalVars.notificationsContainer = document.createElement('div')
    globalVars.notificationsContainer.className = 'pl-notification-container'
    document.body.appendChild(globalVars.notificationsContainer)
  }
  const props = isObject(options) ? { ...options } : null
  const child = (isFunction(options) || isVNode(options))
    ? {
        headless: isFunction(options)
          ? options
          : () => options,
      }
    : null

  const container = document.createElement('div')
  const notification = createVNode(NotificationConstructor, props, child)
  render(notification, container)
  globalVars.notificationsContainer.classList.add(`__${options?.placement || 'left'}`)
  globalVars.notificationsContainer.appendChild(container.firstChild!)
}
