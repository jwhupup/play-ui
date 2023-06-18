import { computed } from "vue";
import { useCount } from "./useCount.mjs";
const useStep = (modelValue, emit) => {
  const steps = computed({
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
  } = useCount({
    min: 0,
    max: computed(() => steps.value.length - 1)
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
export {
  useStep
};
//# sourceMappingURL=useStep.mjs.map
