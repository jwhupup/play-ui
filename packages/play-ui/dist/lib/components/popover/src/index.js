"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../node_modules/.pnpm/@sxzz_popperjs-es@2.11.7/node_modules/@sxzz/popperjs-es/dist/index.js");
const useOutside = require("../../../composables/useOutside.js");
const index$1 = require("../../../utils/index.js");
const popoverProps = {
  title: String,
  content: String,
  placement: {
    type: String,
    default: "auto"
  },
  trigger: {
    type: String,
    default: "hover"
  }
};
const Popover = /* @__PURE__ */ vue.defineComponent({
  name: "Popover",
  props: popoverProps,
  setup(props, {
    slots
  }) {
    let timer;
    let flag = true;
    let popperInstance;
    const visible = vue.ref(false);
    const popover = vue.ref();
    const popoverBtn = vue.ref();
    const popoverContainer = vue.ref();
    vue.onMounted(() => {
      popperInstance = index.createPopper(popoverBtn.value, popover.value, {
        placement: props.placement,
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }]
      });
    });
    const visibleControl = (enabled) => {
      visible.value = enabled;
      popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [...options.modifiers, {
          name: "eventListeners",
          enabled
        }]
      }));
      enabled && popperInstance.update();
    };
    const onClick = () => {
      if (!visible.value)
        visibleControl(!visible.value);
    };
    const onBtnClick = (evt) => {
      if (props.trigger === "click") {
        evt.stopPropagation();
        visibleControl(!visible.value);
      }
    };
    const onMouseenter = () => {
      flag = false;
      visibleControl(true);
    };
    const onMouseleave = () => {
      flag = true;
      timer = setTimeout(() => {
        clearTimeout(timer);
        flag && visibleControl(false);
      }, 300);
    };
    const eventProps = vue.computed(() => {
      if (props.trigger === "hover")
        return {
          onMouseenter,
          onMouseleave
        };
      const {
        isOutside
      } = useOutside.useOutside(popoverContainer, visible);
      vue.watchEffect(() => isOutside.value && (visible.value = false));
      return {
        onClick
      };
    });
    const renderPopover = () => vue.createVNode(vue.Fragment, null, [vue.createVNode("div", null, [props.title]), vue.createVNode("div", null, [props.content])]);
    return () => {
      var _a;
      return vue.createVNode("div", vue.mergeProps({
        "class": "pl-popover",
        "ref": popoverContainer
      }, eventProps.value), [vue.createVNode(vue.Transition, {
        "enter-active-class": index$1.animation("fadeIn"),
        "leave-active-class": index$1.animation("fadeOut"),
        "appear": true
      }, {
        default: () => {
          var _a2, _b;
          return [vue.withDirectives(vue.createVNode("div", {
            "id": "pl-popover",
            "ref": popover,
            "class": !slots.headless && "pl-popover-content"
          }, [((_a2 = slots.headless) == null ? void 0 : _a2.call(slots)) || ((_b = slots.default) == null ? void 0 : _b.call(slots)) || renderPopover(), slots.headless ? null : vue.createVNode("div", {
            "id": "pl-popover-arrow",
            "data-popper-arrow": true
          }, null)]), [[vue.vShow, visible.value]])];
        }
      }), vue.createVNode("div", {
        "class": "pl-popover-reference",
        "ref": popoverBtn,
        "onClick": onBtnClick
      }, [(_a = slots.reference) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
exports.default = Popover;
//# sourceMappingURL=index.js.map
