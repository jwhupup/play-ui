"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../utils/index.js");
const useModal = require("../../../composables/useModal.js");
const index$1 = require("../../button/index.js");
const darwerProps = {
  shakeOff: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: "left"
  },
  fullscreen: Boolean
};
const Drawer = /* @__PURE__ */ vue.defineComponent({
  name: "Drawer",
  props: darwerProps,
  emits: ["open", "close"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal.useModal(emit);
    const style = vue.computed(() => {
      if (props.placement === "left" || props.placement === "right") {
        return {
          minWidth: props.fullscreen ? "100%" : "350px",
          top: 0,
          bottom: 0,
          [props.placement]: 0
        };
      } else if (props.placement === "top" || props.placement === "bottom") {
        return {
          height: props.fullscreen ? "100%" : 0,
          minHeight: "350px",
          left: 0,
          right: 0,
          [props.placement]: 0
        };
      }
      return {};
    });
    const animate = vue.computed(() => {
      const inSuffix = index.uppercaseFirstWord(props.placement === "top" ? "down" : props.placement === "bottom" ? "up" : props.placement);
      const outSuffix = index.uppercaseFirstWord(props.placement === "top" ? "up" : props.placement === "bottom" ? "down" : props.placement);
      return {
        enter: index.animation(`slideIn${inSuffix}`),
        leave: index.animation(`slideOut${outSuffix}`)
      };
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const renderMask = () => {
      if (!isShake("mask"))
        return vue.withDirectives(vue.createVNode("div", {
          "class": "pl-mask"
        }, null), [[vue.vShow, modal.state.value]]);
    };
    const renderDrawer = () => {
      var _a;
      const renderHeader = () => {
        if (isShake("header"))
          return;
        const renderXButton = () => {
          if (!isShake("x-button")) {
            return vue.createVNode(index$1.PlButton, {
              "type": "link",
              "state": "info",
              "icon-left": "x-lg",
              "onClick": modal.close
            }, null);
          }
        };
        return vue.createVNode("header", null, [vue.createVNode("h3", null, [vue.createTextVNode("Darwer header")]), renderXButton()]);
      };
      return vue.createVNode("div", {
        "class": "pl-darwer-default"
      }, [renderHeader(), vue.createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
    return () => vue.createVNode(vue.Teleport, {
      "to": "body"
    }, {
      default: () => [renderMask(), vue.createVNode(vue.Transition, {
        "enter-active-class": index.animation(animate.value.enter),
        "leave-active-class": index.animation(animate.value.leave),
        "appear": true
      }, {
        default: () => {
          var _a;
          return [vue.withDirectives(vue.createVNode("div", {
            "ref": modal,
            "class": "pl-darwer",
            "style": style.value
          }, [((_a = slots.headless) == null ? void 0 : _a.call(slots)) || renderDrawer()]), [[vue.vShow, modal.state.value]])];
        }
      })]
    });
  }
});
exports.default = Drawer;
//# sourceMappingURL=index.js.map
