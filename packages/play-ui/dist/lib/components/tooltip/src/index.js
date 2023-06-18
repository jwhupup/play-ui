"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../popover/index.js");
const Tooltip = /* @__PURE__ */ vue.defineComponent({
  name: "Tooltip",
  props: {
    content: String,
    placement: {
      type: String,
      default: "auto"
    }
  },
  setup(props, {
    slots
  }) {
    const renderTooptip = () => vue.createVNode("div", {
      "class": "pl-tooltip"
    }, [props.content]);
    return () => vue.createVNode(index.PlPopover, props, {
      headless: slots.headless || renderTooptip,
      reference: slots.reference
    });
  }
});
exports.default = Tooltip;
//# sourceMappingURL=index.js.map
