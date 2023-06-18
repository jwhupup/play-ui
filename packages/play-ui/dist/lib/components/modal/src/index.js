"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../utils/index.js");
const useModal = require("../../../composables/useModal.js");
const useDraggable = require("../../../composables/useDraggable.js");
const index_vue_vue_type_script_setup_true_lang = require("../../button/src/index.vue2.js");
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
const Modal = /* @__PURE__ */ vue.defineComponent({
  name: "Modal",
  props: modalProps,
  emits: ["open", "close", "cancel", "confirm"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal.useModal(emit);
    useDraggable.useDraggable(modal, {
      translateX: vue.computed(() => modal.state.value ? modal.value.clientWidth / 2 : 0)
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const onCancel = () => modal.close() && emit("cancel");
    const onConfirm = () => emit("confirm");
    const onClose = () => modal.close();
    const renderHeader = () => {
      if (!isShake("header") && props.title) {
        return vue.createVNode("header", null, [vue.createVNode("h3", null, [props.title])]);
      }
    };
    const renderFooter = () => {
      if (isShake("footer"))
        return;
      const renderButtons = [];
      if (!isShake("cancel-button")) {
        renderButtons.push(vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, {
          "type": "outline",
          "onClick": onCancel
        }, {
          default: props.cancelText
        }));
      }
      if (!isShake("confirm-button")) {
        renderButtons.push(vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, {
          "type": "solid",
          "onClick": onConfirm
        }, {
          default: props.confirmText
        }));
      }
      return vue.createVNode("footer", null, [vue.createVNode("div", {
        "class": "pl-modal-button"
      }, [renderButtons])]);
    };
    const renderModal = () => {
      var _a;
      const renderMask = () => {
        if (!isShake("mask"))
          return vue.createVNode("div", {
            "class": "pl-mask"
          }, null);
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return vue.createVNode(index_vue_vue_type_script_setup_true_lang.default, {
            "class": "pl-modal-x",
            "type": "link",
            "state": "info",
            "icon-left": "x-lg",
            "onClick": onClose
          }, null);
        }
      };
      return vue.createVNode(vue.Fragment, null, [renderMask(), vue.createVNode("div", {
        "ref": modal,
        "class": "pl-modal",
        "draggable": props.draggable
      }, [renderXButton(), renderHeader(), vue.createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), renderFooter()])]);
    };
    const renderHeadless = () => {
      var _a;
      return vue.createVNode("div", {
        "ref": modal
      }, [(_a = slots.headless) == null ? void 0 : _a.call(slots)]);
    };
    return () => vue.createVNode(vue.Teleport, {
      "to": "body"
    }, {
      default: () => [vue.createVNode(vue.Transition, {
        "enter-active-class": index.animation("fadeIn"),
        "leave-active-class": index.animation("fadeOut"),
        "appear": true
      }, {
        default: () => [vue.withDirectives(vue.createVNode("div", null, [slots.headless ? renderHeadless() : renderModal()]), [[vue.vShow, modal.state.value]])]
      })]
    });
  }
});
exports.default = Modal;
//# sourceMappingURL=index.js.map
