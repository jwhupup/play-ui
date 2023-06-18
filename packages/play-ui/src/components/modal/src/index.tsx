import { type ExtractPropTypes, type PropType, Teleport, Transition, computed, defineComponent } from 'vue'
import { type ToggleHandler, useDraggable, useModal } from '../../../composables'
import { animation } from '../../../utils'
import Button from '../../button/src/index.vue'

export interface ModalInstance extends ToggleHandler, HTMLElement {}
export type ModalProps = ExtractPropTypes<typeof modalProps>
type ShakeOffProp = 'x-button' | 'confirm-button' | 'cancel-button' | 'mask' | 'header' | 'footer'

const modalProps = {
  shakeOff: {
    type: Array as PropType<ShakeOffProp[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  cancelText: {
    type: String,
    default: 'Cancel',
  },
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  draggable: Boolean,
}

export default defineComponent({
  name: 'Modal',
  props: modalProps,
  emits: [
    'open',
    'close',
    'cancel',
    'confirm',
  ],
  setup(props, { slots, emit }) {
    const { modal } = useModal(emit)

    useDraggable(modal, {
      translateX: computed(
        () => modal.state.value
          ? modal.value!.clientWidth / 2
          : 0,
      ),
    })
    const isShake = (prop: ShakeOffProp) => props.shakeOff.includes(prop)

    const onCancel = () => modal.close() && emit('cancel')

    const onConfirm = () => emit('confirm')

    const onClose = () => modal.close()

    const renderHeader = () => {
      if (!isShake('header') && props.title) {
        return (
          <header>
            <h3>{ props.title }</h3>
          </header>
        )
      }
    }

    const renderFooter = () => {
      if (isShake('footer'))
        return

      const renderButtons = []
      if (!isShake('cancel-button')) {
        renderButtons.push(
          <Button
            type="outline"
            onClick={onCancel}
            v-slots={{
              default: props.cancelText,
            }}
          />,
        )
      }
      if (!isShake('confirm-button')) {
        renderButtons.push(
          <Button
            type="solid"
            onClick={onConfirm}
            v-slots={{
              default: props.confirmText,
            }}
          />,
        )
      }

      return (
        <footer>
          <div class="pl-modal-button">
            {renderButtons}
          </div>
        </footer>
      )
    }

    const renderModal = () => {
      const renderMask = () => {
        if (!isShake('mask'))
          return <div class={'pl-mask'} />
      }

      const renderXButton = () => {
        if (!isShake('x-button')) {
          return (
            <Button
              class='pl-modal-x'
              type='link'
              state='info'
              icon-left='x-lg'
              onClick={onClose}
            />
          )
        }
      }

      return (
        <>
          {renderMask()}
          <div
            ref={modal}
            class="pl-modal"
            draggable={props.draggable}
          >
            {renderXButton()}
            {renderHeader()}
            <section>
              {slots.default?.()}
            </section>
            {renderFooter()}
          </div>
        </>
      )
    }
    const renderHeadless = () => (
      <div ref={modal}>
        {slots.headless?.()}
      </div>
    )

    return () => (
      <Teleport to={'body'}>
        <Transition
          enter-active-class={animation('fadeIn')}
          leave-active-class={animation('fadeOut')}
          appear
        >
          <div v-show={modal.state.value}>
            {slots.headless ? renderHeadless() : renderModal()}
          </div>
        </Transition>
      </Teleport>
    )
  },
})
