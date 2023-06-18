"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const _hoisted_1 = ["type", "value", "placeholder"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "Input" },
  __name: "index",
  props: {
    modelValue: {},
    type: { default: "bordered" },
    nativeType: { default: "text" },
    size: { default: "medium" },
    placeholder: {},
    rule: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit }) {
    const props = __props;
    const inputEl = vue.ref();
    const isShowTip = vue.ref(false);
    const tipMessage = vue.ref("Please enter a valid value.");
    const handleBlur = (evt) => {
      var _a, _b, _c, _d, _e;
      emit("blur", evt);
      if ((_a = props.rule) == null ? void 0 : _a.message)
        tipMessage.value = (_b = props.rule) == null ? void 0 : _b.message;
      if (((_c = props.rule) == null ? void 0 : _c.require) && !props.modelValue)
        isShowTip.value = !props.modelValue;
      if (((_d = props.rule) == null ? void 0 : _d.pattern) && props.modelValue)
        isShowTip.value = !((_e = props.rule) == null ? void 0 : _e.pattern.test(String(props.modelValue)));
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createElementVNode("input", {
          ref_key: "inputEl",
          ref: inputEl,
          class: vue.normalizeClass(["pl-input", [
            `pl-input--${_ctx.type}`,
            `pl-input--${_ctx.size}`,
            { "is-disabled": _ctx.disabled }
          ]]),
          title: "",
          type: _ctx.nativeType,
          value: _ctx.modelValue,
          placeholder: _ctx.placeholder,
          onBlur: handleBlur,
          onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
        }, null, 42, _hoisted_1),
        vue.withDirectives(vue.createElementVNode("div", { class: "pl-input-tip" }, vue.toDisplayString(tipMessage.value), 513), [
          [vue.vShow, isShowTip.value]
        ])
      ]);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=index.vue2.js.map
