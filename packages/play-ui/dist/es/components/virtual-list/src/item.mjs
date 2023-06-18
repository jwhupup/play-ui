import { defineComponent, createVNode } from "vue";
const VirtualListItem = /* @__PURE__ */ defineComponent({
  name: "VirtualListItem",
  setup(_, {
    slots
  }) {
    return () => {
      var _a;
      return createVNode("div", {
        "class": "pl-virtual-list-item"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
export {
  VirtualListItem as default
};
//# sourceMappingURL=item.mjs.map
