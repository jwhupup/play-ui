import { defineComponent, ref, onMounted, computed, watchEffect, createVNode, mergeProps, Transition, withDirectives, vShow, Fragment } from "vue";
import { createPopper as yn } from "../../../node_modules/.pnpm/@sxzz_popperjs-es@2.11.7/node_modules/@sxzz/popperjs-es/dist/index.mjs";
import { useOutside } from "../../../composables/useOutside.mjs";
import { animation } from "../../../utils/index.mjs";
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
const Popover = /* @__PURE__ */ defineComponent({
  name: "Popover",
  props: popoverProps,
  setup(props, {
    slots
  }) {
    let timer;
    let flag = true;
    let popperInstance;
    const visible = ref(false);
    const popover = ref();
    const popoverBtn = ref();
    const popoverContainer = ref();
    onMounted(() => {
      popperInstance = yn(popoverBtn.value, popover.value, {
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
    const eventProps = computed(() => {
      if (props.trigger === "hover")
        return {
          onMouseenter,
          onMouseleave
        };
      const {
        isOutside
      } = useOutside(popoverContainer, visible);
      watchEffect(() => isOutside.value && (visible.value = false));
      return {
        onClick
      };
    });
    const renderPopover = () => createVNode(Fragment, null, [createVNode("div", null, [props.title]), createVNode("div", null, [props.content])]);
    return () => {
      var _a;
      return createVNode("div", mergeProps({
        "class": "pl-popover",
        "ref": popoverContainer
      }, eventProps.value), [createVNode(Transition, {
        "enter-active-class": animation("fadeIn"),
        "leave-active-class": animation("fadeOut"),
        "appear": true
      }, {
        default: () => {
          var _a2, _b;
          return [withDirectives(createVNode("div", {
            "id": "pl-popover",
            "ref": popover,
            "class": !slots.headless && "pl-popover-content"
          }, [((_a2 = slots.headless) == null ? void 0 : _a2.call(slots)) || ((_b = slots.default) == null ? void 0 : _b.call(slots)) || renderPopover(), slots.headless ? null : createVNode("div", {
            "id": "pl-popover-arrow",
            "data-popper-arrow": true
          }, null)]), [[vShow, visible.value]])];
        }
      }), createVNode("div", {
        "class": "pl-popover-reference",
        "ref": popoverBtn,
        "onClick": onBtnClick
      }, [(_a = slots.reference) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
export {
  Popover as default
};
//# sourceMappingURL=index.mjs.map
