"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const header = require("./header.js");
const PL_TAB_KEY = Symbol("pl-tabs");
const tabsProps = {
  defaultTab: String,
  position: String
};
const Tabs = /* @__PURE__ */ vue.defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, {
    slots
  }) {
    var _a;
    const paneId = vue.ref(0);
    const currentPaneId = vue.ref(0);
    const headers = vue.ref([]);
    if (!((_a = slots.default) == null ? void 0 : _a.call(slots)))
      console.log("Warn: Tabs missing default slot.");
    vue.provide(PL_TAB_KEY, {
      headers,
      paneId,
      currentPaneId,
      position: vue.computed(() => props.position || "top")
    });
    return () => {
      var _a2;
      return vue.createVNode("div", {
        "class": ["pl-tabs", `${props.position}`]
      }, [vue.createVNode(header.default, null, null), (_a2 = slots.default) == null ? void 0 : _a2.call(slots)]);
    };
  }
});
exports.PL_TAB_KEY = PL_TAB_KEY;
exports.default = Tabs;
//# sourceMappingURL=index.js.map
