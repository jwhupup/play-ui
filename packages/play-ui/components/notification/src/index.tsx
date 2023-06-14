import { type PropType, Transition, computed, createVNode, defineComponent, isVNode, render } from 'vue'
import { isFunction, isObject } from '@vue/shared'
import { useToggle } from '../../../composables'
import { first2UpperCase } from '../../../utils'
import { globalVars } from '../../globalVars'
import Icon from '../../icon'
import Button from '../../button'

type ShakeOffProp = 'x-button' | 'cancel-button' | 'confirm-button' | 'icon' | 'title'

export const NotificationConstructor = defineComponent({
  name: 'Notification',
  props: {
    title: String,
    content: String,
    shakeOff: {
      type: Array as PropType<ShakeOffProp[]>,
      default: () => [],
    },
    placement: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
    },
  },
  setup(props, { slots }) {
    const { state, open, close } = useToggle()
    open()

    close({ delay: 3000 })

    const enterAnimate = computed(() => first2UpperCase(props.placement))

    const renderNotification = () => (
      <div
        class={'pl-notification'}
      >
        <Icon name='bell'></Icon>
        <main>
          <Button type='link' state='info' icon-left={'x-lg'} />
          <h3 class={'pl-notification-title'}>{props.title}</h3>
          <div class={'pl-notification-content'}>{props.content}</div>
          <Button type='link'>Don't allow</Button>
          <Button type='link'>Allow</Button>
        </main>
      </div>
    )

    return () => (
      <Transition
        enter-active-class={`animate__animated animate__slideIn${enterAnimate.value} animate__faster`}
        leave-active-class="animate__animated animate__zoomOutLeft"
        appear
      >
        {state.value ? slots.headless?.()[0] ?? renderNotification() : null}
      </Transition>
    )
  },
})

export default (options?: any) => {
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
  globalVars.notificationsContainer.classList.add(`__${options.placement || 'left'}`)
  globalVars.notificationsContainer.appendChild(container.firstChild!)
}
