"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useCount = require("./useCount.js");
const useStep = (modelValue, emit) => {
  const steps = vue.computed({
    get() {
      return modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    }
  });
  const {
    count: current,
    add: next,
    sub: prev,
    update: toggle
  } = useCount.useCount({
    min: 0,
    max: vue.computed(() => steps.value.length - 1)
  });
  const add = (step) => {
    var _a;
    (_a = steps.value) == null ? void 0 : _a.push(step);
  };
  const sub = (stepIndex) => {
    var _a;
    (_a = steps.value) == null ? void 0 : _a.splice(stepIndex, 1);
  };
  return {
    steps,
    current,
    next,
    prev,
    toggle,
    add,
    sub
  };
};
exports.useStep = useStep;
//# sourceMappingURL=useStep.js.map
