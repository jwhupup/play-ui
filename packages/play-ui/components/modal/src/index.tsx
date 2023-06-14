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
      translateX: computed(() => modal.state.value ? modal.value!.clientWidth / 2 : 0),
    })
    const isShake = (prop: ShakeOffProp) => props.shakeOff.includes(prop)

    const onCancel = () => modal.close() && emit('cancel')

    const onConfirm = () => emit('confirm')

    const onClose = () => modal.close()

    const renderHeader = () => (
      <header>
        <h3>{ props.title }</h3>
      </header>
    )
    const renderFooter = () => (
      <footer>
        <div class="pl-modal-button">
          {isShake('cancel-button')
            || <Button type="outline" onClick={onCancel}>{props.cancelText}</Button>}
          {isShake('confirm-button')
            || <Button type="solid" onClick={onConfirm}>{props.confirmText}</Button>}
        </div>
      </footer>
    )
    const renderModal = () => (
      <>
        {isShake('mask') || <div class={'pl-mask'} />}
        <div
          class="pl-modal"
          ref={modal}
          draggable={props.draggable}
        >
          {isShake('x-button') || <Button type='link' state='info' icon-left={'x-lg'} onClick={onClose} />}
          {isShake('header') || (props.title && renderHeader())}
          <section>{slots.default?.()}</section>
          {isShake('footer') || renderFooter()}
        </div>
      </>
    )
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
