"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const is = require("../utils/is.js");
const useCount = (options = {}) => {
  const {
    min = -Infinity,
    max = Infinity,
    initial = 0
  } = options;
  const count = vue.ref(initial);
  const add = (step = 1) => {
    if (is.isNumber(vue.toValue(max)) && count.value < vue.toValue(max)) {
      if (count.value + step > vue.toValue(max))
        return count.value = vue.toValue(max);
      count.value += step;
    }
  };
  const sub = (step = 1) => {
    if (is.isNumber(vue.toValue(min)) && count.value > vue.toValue(min)) {
      if (count.value - step < vue.toValue(min))
        return count.value = vue.toValue(min);
      count.value -= step;
    }
  };
  const update = (value) => {
    if (value >= vue.toValue(min) && value <= vue.toValue(max))
      count.value = value;
  };
  return {
    count,
    add,
    sub,
    update
  };
};
exports.useCount = useCount;
//# sourceMappingURL=useCount.js.map
