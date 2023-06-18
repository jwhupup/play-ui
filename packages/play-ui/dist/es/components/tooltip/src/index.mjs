import { defineComponent, createVNode } from "vue";
import { PlPopover } from "../../popover/index.mjs";
const Tooltip = /* @__PURE__ */ defineComponent({
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
    const renderTooptip = () => createVNode("div", {
      "class": "pl-tooltip"
    }, [props.content]);
    return () => createVNode(PlPopover, props, {
      headless: slots.headless || renderTooptip,
      reference: slots.reference
    });
  }
});
export {
  Tooltip as default
};
//# sourceMappingURL=index.mjs.map
