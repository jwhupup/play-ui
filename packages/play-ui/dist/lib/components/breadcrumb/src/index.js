"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const useStep = require("../../../composables/useStep.js");
const index = require("../../button/index.js");
const Breadcrumb = /* @__PURE__ */ vue.defineComponent({
  name: "Breadcrumb",
  props: {
    modelValue: Array,
    replace: Boolean,
    separator: {
      type: String,
      default: "/"
    }
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      steps,
      current,
      toggle
    } = useStep.useStep(props.modelValue, emit);
    const instance = vue.getCurrentInstance();
    const router = instance == null ? void 0 : instance.appContext.config.globalProperties.$router;
    const onClick = (index2, breadcrumb) => {
      return () => {
        toggle(index2);
        if (!breadcrumb.to || !router)
          return;
        props.replace ? router.replace(breadcrumb.to) : router.push(breadcrumb.to);
      };
    };
    return () => {
      var _a;
      return vue.createVNode(vue.Fragment, null, [(_a = steps.value) == null ? void 0 : _a.map((step, index$1) => vue.createVNode(vue.Fragment, null, [vue.withDirectives(vue.createVNode("span", null, [props.separator]), [[vue.vShow, index$1 !== 0]]), vue.createVNode(index.PlButton, {
        "size": "mini",
        "type": "link",
        "iconLeft": step.icon,
        "state": current.value === index$1 ? "primary" : "info",
        "onClick": onClick(index$1, step)
      }, {
        default: () => [step.name]
      })]))]);
    };
  }
});
exports.default = Breadcrumb;
//# sourceMappingURL=index.js.map
