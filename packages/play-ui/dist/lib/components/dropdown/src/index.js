"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("../index.js");
const index$2 = require("../../button/index.js");
const index$3 = require("../../badge/index.js");
const index = require("../../popover/index.js");
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
const Dropdown = /* @__PURE__ */ vue.defineComponent({
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
    const renderMenuButton = (item) => vue.createVNode(index$2.PlButton, vue.mergeProps({
      "type": "ghost",
      "state": "info",
      "disabled": item.disabled,
      "onClick": onClick(item)
    }, item.button), {
      default: () => {
        var _a;
        return [vue.createVNode("div", {
          "class": "pl-dropdown-button"
        }, [item.name, ((_a = item.button) == null ? void 0 : _a.badge) && vue.createVNode(index$3.PlBadge, item.button.badge, null)])];
      }
    });
    const renderNormalMenuButton = (item) => vue.createVNode(vue.Fragment, null, [item.title && vue.createVNode("div", {
      "class": "pl-dropdown-title"
    }, [item.title]), renderMenuButton(item), item.divider && vue.createVNode("div", {
      "class": "pl-dropdown-divider"
    }, null)]);
    const renderDropdown = () => vue.createVNode("div", {
      "class": "pl-dropdown-menu"
    }, [props.data.map((item) => {
      if (item.children) {
        return vue.createVNode(index$1.PlDropdown, {
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
    return () => vue.createVNode(index.PlPopover, props, {
      reference: slots.reference,
      headless: slots.headless || renderDropdown
    });
  }
});
exports.default = Dropdown;
//# sourceMappingURL=index.js.map
