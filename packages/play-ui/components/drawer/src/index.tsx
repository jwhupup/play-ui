import { type ExtractPropTypes, type PropType, Teleport, Transition, computed, defineComponent } from 'vue'
import { type ToggleHandler } from '../../../composables'
import { useModal } from '../../../composables'
import { animation, uppercaseFirstWord } from '../../../utils'
import Button from '../../button'

export interface DarwerInstance extends ToggleHandler, HTMLElement {}
export type DarwerProps = ExtractPropTypes<typeof darwerProps>
type ShakeOffProp = 'x-button' | 'mask' | 'header'

const darwerProps = {
  shakeOff: {
    type: Array as PropType<ShakeOffProp[]>,
    default: () => [],
  },
  placement: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'left',
  },
  fullscreen: Boolean,
}

export default defineComponent({
  name: 'Drawer',
  props: darwerProps,
  emits: [
    'open',
    'close',
  ],
  setup(props, { slots, emit }) {
    const { modal } = useModal(emit)

    const style = computed(() => {
      if (props.placement === 'left' || props.placement === 'right') {
        return {
          minWidth: props.fullscreen ? '100%' : '350px',
          top: 0,
          bottom: 0,
          [props.placement]: 0,
        }
      }
      else if (props.placement === 'top' || props.placement === 'bottom') {
        return {
          height: props.fullscreen ? '100%' : 0,
          minHeight: '350px',
          left: 0,
          right: 0,
          [props.placement]: 0,
        }
      }
      return {}
    })

    const animate = computed(() => {
      const inSuffix = uppercaseFirstWord(props.placement === 'top'
        ? 'down'
        : props.placement === 'bottom'
          ? 'up'
          : props.placement,
      )
      const outSuffix = uppercaseFirstWord(props.placement === 'top'
        ? 'up'
        : props.placement === 'bottom'
          ? 'down'
          : props.placement,
      )
      return {
        enter: animation(`slideIn${inSuffix}`),
        leave: animation(`slideOut${outSuffix}`),
      }
    })

    const isShake = (prop: ShakeOffProp) => props.shakeOff.includes(prop)

    const onClose = () => modal.close()

    const renderDrawer = () => {
      const renderHeader = () => {
        if (isShake('header'))
          return

        const renderXButton = () => {
          if (!isShake('x-button')) {
            return (
              <Button
                type='link'
                state='info'
                icon-left='x-lg'
                onClick={onClose}
              />
            )
          }
        }
        return (
          <header>
            <h3>Darwer header</h3>
            {renderXButton()}
          </header>
        )
      }
      return (
        <div class='pl-darwer-default'>
          {renderHeader()}
          <section>
            {slots.default?.()}
          </section>
        </div>
      )
    }

    return () => (
      <Teleport to='body'>
        {isShake('mask') || <div class='pl-mask' v-show={modal.state.value} />}
        <Transition
          enter-active-class={animation(animate.value.enter)}
          leave-active-class={animation(animate.value.leave)}
          appear
        >
          <div
            class='pl-darwer'
            style={style.value}
            ref={modal}
            v-show={modal.state.value}
          >
            {slots.headless?.() || renderDrawer()}
          </div>
       </Transition>
      </Teleport>
    )
  },
})
