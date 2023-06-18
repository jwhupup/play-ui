import { defineComponent, inject, withDirectives, createVNode, vShow } from "vue";
import "../../button/index.mjs";
import { PL_TAB_KEY } from "./index.mjs";
import { buttonProps } from "../../button/src/type.mjs";
const tabPaneProps = Object.assign({
  name: String
}, buttonProps);
const TabPane = /* @__PURE__ */ defineComponent({
  name: "TabPane",
  props: tabPaneProps,
  setup(props, {
    slots
  }) {
    const {
      paneId,
      currentPaneId,
      headers
    } = inject(PL_TAB_KEY);
    const id = paneId.value++;
    headers.value.push({
      id,
      ...props
    });
    return () => {
      var _a;
      return withDirectives(createVNode("div", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, currentPaneId.value === id]]);
    };
  }
});
export {
  TabPane as default
};
//# sourceMappingURL=pane.mjs.map
