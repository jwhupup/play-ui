"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../button/index.js");
const index = require("./index.js");
const type = require("../../button/src/type.js");
const tabPaneProps = Object.assign({
  name: String
}, type.buttonProps);
const TabPane = /* @__PURE__ */ vue.defineComponent({
  name: "TabPane",
  props: tabPaneProps,
  setup(props, {
    slots
  }) {
    const {
      paneId,
      currentPaneId,
      headers
    } = vue.inject(index.PL_TAB_KEY);
    const id = paneId.value++;
    headers.value.push({
      id,
      ...props
    });
    return () => {
      var _a;
      return vue.withDirectives(vue.createVNode("div", null, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vue.vShow, currentPaneId.value === id]]);
    };
  }
});
exports.default = TabPane;
//# sourceMappingURL=pane.js.map
