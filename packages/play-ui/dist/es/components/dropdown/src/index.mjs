import { defineComponent, createVNode, mergeProps, Fragment } from "vue";
import { PlDropdown } from "../index.mjs";
import { PlButton } from "../../button/index.mjs";
import { PlBadge } from "../../badge/index.mjs";
import { PlPopover } from "../../popover/index.mjs";
const dropdownProps = {
  placement: {
    type: String,
    default: "bottom"
  },
  trigger: {
    type: String,
    default: "hover"
  },
  data: {
    type: Array,
    default: () => []
  }
};
const Dropdown = /* @__PURE__ */ defineComponent({
  name: "Dropdown",
  props: dropdownProps,
  setup(props, {
    slots
  }) {
    const onClick = (item) => {
      return (evt) => {
        if (item.callback)
          item.callback();
        if (!item.children) {
          evt.stopPropagation();
          document.documentElement.click();
        }
      };
    };
    const renderMenuButton = (item) => createVNode(PlButton, mergeProps({
      "type": "ghost",
      "state": "info",
      "disabled": item.disabled,
      "onClick": onClick(item)
    }, item.button), {
      default: () => {
        var _a;
        return [createVNode("div", {
          "class": "pl-dropdown-button"
        }, [item.name, ((_a = item.button) == null ? void 0 : _a.badge) && createVNode(PlBadge, item.button.badge, null)])];
      }
    });
    const renderNormalMenuButton = (item) => createVNode(Fragment, null, [item.title && createVNode("div", {
      "class": "pl-dropdown-title"
    }, [item.title]), renderMenuButton(item), item.divider && createVNode("div", {
      "class": "pl-dropdown-divider"
    }, null)]);
    const renderDropdown = () => createVNode("div", {
      "class": "pl-dropdown-menu"
    }, [props.data.map((item) => {
      if (item.children) {
        return createVNode(PlDropdown, {
          "class": "pl-dropdown-child",
          "data": item.children,
          "trigger": props.trigger,
          "placement": "right"
        }, {
          reference: renderMenuButton(item)
        });
      }
      return renderNormalMenuButton(item);
    })]);
    return () => createVNode(PlPopover, props, {
      reference: slots.reference,
      headless: slots.headless || renderDropdown
    });
  }
});
export {
  Dropdown as default
};
//# sourceMappingURL=index.mjs.map
