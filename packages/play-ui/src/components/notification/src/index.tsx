import { Transition, computed, createVNode, defineComponent, isVNode, render } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'

import { isFunction, isObject } from '@vue/shared'
import { type ToggleHandler, useToggle } from '../../../composables'
import { animation, uppercaseFirstWord } from '../../../utils'
import Button from '../../button'
import Icon from '../../icon'

type ShakeOffProp = 'x-button' | 'icon' | 'title' | 'confirm-button' | 'cancel-button'
export type NotificationProps = Partial<ExtractPropTypes<typeof notificationProps>>
export type NotificationInstance = Pick<ToggleHandler, 'state' | 'open' | 'close'>

const notificationProps = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  onCancel: Function as PropType<(handler: NotificationInstance) => any>,
  onConfirm: Function as PropType<(handler: NotificationInstance) => any>,
  shakeOff: {
    type: Array as PropType<ShakeOffProp[]>,
    default: () => [],
  },
  autoClose: {
    type: Boolean,
    default: true,
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
    const notify = useToggle() as NotificationInstance

    notify.open()

    props.autoClose && notify.close({ delay: 3000 })

    const animate = computed(() => uppercaseFirstWord(props.placement))

    const isShake = (prop: ShakeOffProp) => props.shakeOff.includes(prop)

    const onCancel = () => props.onCancel?.(notify)

    const onConfirm = () => props.onConfirm?.(notify)

    const renderNotification = () => {
      const renderIcon = () => {
        if (!isShake('icon'))
          return <Icon name='bell' />
      }
      const renderTitleContent = () => {
        const renderFn = [
          <div class='pl-notification-content'>{props.content}</div>,
        ]
        if (!isShake('title'))
          renderFn.unshift(<h3 class='pl-notification-title'>{props.title}</h3>)

        return renderFn
      }
      const renderXButton = () => {
        if (!isShake('x-button')) {
          return (
            <Button
              class='pl-notification-close'
              mode='link'
              state='info'
              icon-left='x-lg'
              onClick={notify.close}
            />
          )
        }
      }
      const renderButton = () => {
        const renderFn = []
        if (!isShake('cancel-button') && props.cancelButtonText) {
          renderFn.push(
            <Button
              mode='link'
              onClick={onCancel}
            >
              {props.cancelButtonText}
            </Button>,
          )
        }
        if (!isShake('confirm-button') && props.confirmButtonText) {
          renderFn.push(
            <Button
              mode='link'
              onClick={onConfirm}
            >
              {props.confirmButtonText}
            </Button>,
          )
        }
        return renderFn
      }

      return (
        <div class='pl-notification'>
          {renderIcon()}
          <main>
            {renderXButton()}
            {renderTitleContent()}
            {renderButton()}
          </main>
        </div>
      )
    }

    return () => (
      <Transition
        enter-active-class={animation(`slideIn${animate.value}`)}
        leave-active-class={animation(`zoomOut${animate.value}`)}
        appear
      >
        {
          notify.state.value
            ? slots.headless?.()[0]
              ?? renderNotification()
            : null
        }
      </Transition>
    )
  },
})

let notificationsContainer: HTMLDivElement | null = null

export default (options?: NotificationProps | Function) => {
  if (!notificationsContainer) {
    notificationsContainer = document.createElement('div')
    notificationsContainer.className = 'pl-notification-container'
    document.body.appendChild(notificationsContainer)
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
  const notification = createVNode(NotificationConstructor, props as NotificationProps, child)
  render(notification, container)
  notificationsContainer.classList.add(`__${(options as NotificationProps)?.placement || 'left'}`)
  notificationsContainer.appendChild(container.firstChild!)
}
