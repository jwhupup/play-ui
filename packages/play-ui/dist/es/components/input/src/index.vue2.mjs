import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, normalizeClass, withDirectives, toDisplayString, vShow } from "vue";
const _hoisted_1 = ["type", "value", "placeholder"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const inputEl = ref();
    const isShowTip = ref(false);
    const tipMessage = ref("Please enter a valid value.");
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
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("input", {
          ref_key: "inputEl",
          ref: inputEl,
          class: normalizeClass(["pl-input", [
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
        withDirectives(createElementVNode("div", { class: "pl-input-tip" }, toDisplayString(tipMessage.value), 513), [
          [vShow, isShowTip.value]
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
