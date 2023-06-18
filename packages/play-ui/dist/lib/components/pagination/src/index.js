"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const useExpose = require("../../../composables/useExpose.js");
const index = require("../../../utils/index.js");
const useCount = require("../../../composables/useCount.js");
const index$1 = require("../../button/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const Pagination = /* @__PURE__ */ vue.defineComponent({
  name: "Pagination",
  props: {
    count: {
      type: Number,
      default: 0
    },
    showCount: {
      type: Number,
      default: 7
    },
    type: {
      type: String,
      default: "ghost"
    },
    shape: {
      type: String,
      default: "rounded"
    }
  },
  setup(props) {
    const count = vue.computed(() => index.range(2, props.count - 1, 1));
    const max = vue.computed(() => count.value.length + 2);
    const {
      count: current,
      add: next,
      sub: prev,
      update: toggle
    } = useCount.useCount({
      initial: 1,
      min: 1,
      max
    });
    useExpose.useExpose({
      current,
      next,
      prev,
      toggle
    });
    const start = vue.ref(0);
    const end = vue.ref(props.showCount - 3);
    const isShowLeftFold = vue.computed(() => current.value * 2 - 1 > props.showCount);
    const isShowRightFold = vue.computed(() => (props.count - current.value) * 2 - 1 >= props.showCount);
    const onPrev = () => prev();
    const onNext = () => next();
    const onStepPrev = () => prev(end.value - start.value - 1);
    const onStepNext = () => next(end.value - start.value);
    const onPageNo = (no) => () => current.value = no;
    const onToggle = (evt) => {
      toggle(parseInt(evt.target.value));
    };
    vue.watchEffect(() => {
      if (isShowLeftFold.value && isShowRightFold.value) {
        const currentIndex = count.value.findIndex((value) => value === current.value);
        const float = (props.showCount - 3) / 2;
        start.value = currentIndex - float;
        end.value = currentIndex + float + 1;
      } else if (isShowLeftFold.value) {
        start.value = count.value.length - props.showCount + 1;
        end.value = count.value.length;
      } else if (isShowRightFold.value) {
        start.value = 0;
        end.value = props.showCount - 2;
      }
    });
    return () => {
      var _a;
      return vue.withDirectives(vue.createVNode("div", null, [vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "chevron-left",
        "type": props.type,
        "shape": props.shape,
        "onClick": onPrev
      }, null), vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "type": props.type,
        "shape": props.shape,
        "state": current.value === 1 ? "primary" : "info",
        "onClick": onPageNo(1)
      }, {
        default: () => [vue.createTextVNode("1")]
      }), vue.withDirectives(vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "three-dots",
        "type": props.type,
        "shape": props.shape,
        "onClick": onStepPrev
      }, null), [[vue.vShow, isShowLeftFold.value]]), (_a = count.value) == null ? void 0 : _a.slice(start.value, end.value).map((pageNo) => vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "type": props.type,
        "shape": props.shape,
        "state": current.value === pageNo ? "primary" : "info",
        "onClick": onPageNo(pageNo)
      }, _isSlot(pageNo) ? pageNo : {
        default: () => [pageNo]
      })), vue.withDirectives(vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "three-dots",
        "type": props.type,
        "shape": props.shape,
        "onClick": onStepNext
      }, null), [[vue.vShow, isShowRightFold.value]]), vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "type": props.type,
        "shape": props.shape,
        "state": current.value === props.count ? "primary" : "info",
        "onClick": onPageNo(props.count)
      }, {
        default: () => [props.count]
      }), vue.createVNode(index$1.PlButton, {
        "size": "mini",
        "state": "info",
        "iconLeft": "chevron-right",
        "type": props.type,
        "shape": props.shape,
        "onClick": onNext
      }, null), vue.createTextVNode("to "), vue.createVNode("input", {
        "type": "number",
        "onBlur": onToggle
      }, null)]), [[vue.vShow, props.count > 1]]);
    };
  }
});
exports.default = Pagination;
//# sourceMappingURL=index.js.map
