import { defineComponent, computed, createVNode, Teleport, Transition, withDirectives, vShow, createTextVNode } from "vue";
import { uppercaseFirstWord, animation } from "../../../utils/index.mjs";
import { useModal } from "../../../composables/useModal.mjs";
import { PlButton } from "../../button/index.mjs";
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
const Drawer = /* @__PURE__ */ defineComponent({
  name: "Drawer",
  props: darwerProps,
  emits: ["open", "close"],
  setup(props, {
    slots,
    emit
  }) {
    const {
      modal
    } = useModal(emit);
    const style = computed(() => {
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
    const animate = computed(() => {
      const inSuffix = uppercaseFirstWord(props.placement === "top" ? "down" : props.placement === "bottom" ? "up" : props.placement);
      const outSuffix = uppercaseFirstWord(props.placement === "top" ? "up" : props.placement === "bottom" ? "down" : props.placement);
      return {
        enter: animation(`slideIn${inSuffix}`),
        leave: animation(`slideOut${outSuffix}`)
      };
    });
    const isShake = (prop) => props.shakeOff.includes(prop);
    const renderMask = () => {
      if (!isShake("mask"))
        return withDirectives(createVNode("div", {
          "class": "pl-mask"
        }, null), [[vShow, modal.state.value]]);
    };
    const renderDrawer = () => {
      var _a;
      const renderHeader = () => {
        if (isShake("header"))
          return;
        const renderXButton = () => {
          if (!isShake("x-button")) {
            return createVNode(PlButton, {
              "type": "link",
              "state": "info",
              "icon-left": "x-lg",
              "onClick": modal.close
            }, null);
          }
        };
        return createVNode("header", null, [createVNode("h3", null, [createTextVNode("Darwer header")]), renderXButton()]);
      };
      return createVNode("div", {
        "class": "pl-darwer-default"
      }, [renderHeader(), createVNode("section", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    };
    return () => createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [renderMask(), createVNode(Transition, {
        "enter-active-class": animation(animate.value.enter),
        "leave-active-class": animation(animate.value.leave),
        "appear": true
      }, {
        default: () => {
          var _a;
          return [withDirectives(createVNode("div", {
            "ref": modal,
            "class": "pl-darwer",
            "style": style.value
          }, [((_a = slots.headless) == null ? void 0 : _a.call(slots)) || renderDrawer()]), [[vShow, modal.state.value]])];
        }
      })]
    });
  }
});
export {
  Drawer as default
};
//# sourceMappingURL=index.mjs.map
