import { defineComponent, computed, createVNode, Teleport, Transition, withDirectives, vShow, Fragment } from "vue";
import { animation } from "../../../utils/index.mjs";
import { useModal } from "../../../composables/useModal.mjs";
import { useDraggable } from "../../../composables/useDraggable.mjs";
import _sfc_main from "../../button/src/index.vue2.mjs";
const modalProps = {
  shakeOff: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: "Cancel"
  },
  confirmText: {
    type: String,
    default: "Confirm"
  },
  draggable: Boolean
};
const Modal = /* @__PURE__ */ defineComponent({
  name: "Modal",
  props: modalProps,
  emits: ["open", "close", "cancel", "confirm"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal(emit);
    useDraggable(modal, {
      translateX: computed(() => modal.state.value ? modal.value.clientWidth / 2 : 0)
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const onCancel = () => modal.close() && emit("cancel");
    const onConfirm = () => emit("confirm");
    const onClose = () => modal.close();
    const renderHeader = () => {
      if (!isShake("header") && props.title) {
        return createVNode("header", null, [createVNode("h3", null, [props.title])]);
      }
    };
    const renderFooter = () => {
      if (isShake("footer"))
        return;
      const renderButtons = [];
      if (!isShake("cancel-button")) {
        renderButtons.push(createVNode(_sfc_main, {
          "type": "outline",
          "onClick": onCancel
        }, {
          default: props.cancelText
        }));
      }
      if (!isShake("confirm-button")) {
        renderButtons.push(createVNode(_sfc_main, {
          "type": "solid",
          "onClick": onConfirm
        }, {
          default: props.confirmText
        }));
      }
      return createVNode("footer", null, [createVNode("div", {
        "class": "pl-modal-button"
      }, [renderButtons])]);
    };
    const renderModal = () => {
      var _a;
      const renderMask = () => {
        if (!isShake("mask"))
          return createVNode("div", {
            "class": "pl-mask"
          }, null);
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return createVNode(_sfc_main, {
            "class": "pl-modal-x",
            "type": "link",
            "state": "info",
            "icon-left": "x-lg",
            "onClick": onClose
          }, null);
        }
      };
      return createVNode(Fragment, null, [renderMask(), createVNode("div", {
        "ref": modal,
        "class": "pl-modal",
        "draggable": props.draggable
      }, [renderXButton(), renderHeader(), createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderFooter()])]);
    };
    const renderHeadless = () => {
      var _a;
      return createVNode("div", {
        "ref": modal
      }, [(_a = slots.headless) == null ? void 0 : _a.call(slots)]);
    };
    return () => createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [createVNode(Transition, {
        "enter-active-class": animation("fadeIn"),
        "leave-active-class": animation("fadeOut"),
        "appear": true
      }, {
        default: () => [withDirectives(createVNode("div", null, [slots.headless ? renderHeadless() : renderModal()]), [[vShow, modal.state.value]])]
      })]
    });
  }
});
export {
  Modal as default
};
//# sourceMappingURL=index.mjs.map
