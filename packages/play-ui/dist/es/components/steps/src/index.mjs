import { defineComponent, createVNode, Fragment } from "vue";
import { useExpose } from "../../../composables/useExpose.mjs";
import { useStep } from "../../../composables/useStep.mjs";
import { PlButton } from "../../button/index.mjs";
import { PlIcon } from "../../icon/index.mjs";
const Steps = /* @__PURE__ */ defineComponent({
  name: "Steps",
  props: {
    modelValue: {
      type: Array,
      require: true
    },
    vertical: Boolean
  },
  emits: ["update:modelValue"],
  setup(props, {
    emit
  }) {
    const {
      steps,
      current,
      toggle: _toggle
    } = useStep(props.modelValue, emit);
    const toggle = (stepIndex, options) => {
      steps.value[stepIndex] = Object.assign(steps.value[stepIndex], options);
      if (steps.value[stepIndex].state !== "pending") {
        steps.value[stepIndex - 1].state = "done";
        steps.value[stepIndex - 1].result = "success";
      }
      if (steps.value[stepIndex].result === "success" || !steps.value[stepIndex].result)
        steps.value[stepIndex + 1].state = "processing";
      _toggle(stepIndex);
    };
    useExpose({
      current,
      toggle
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": ["pl-steps", props.vertical && "__vertical"]
      }, [(_a = steps.value) == null ? void 0 : _a.map((step, index) => {
        var _a2;
        return createVNode(Fragment, null, [createVNode("div", {
          "class": ["pl-steps-item", props.vertical && "__vertical"]
        }, [createVNode(PlButton, {
          "type": step.state === "processing" ? "outline" : step.state === "done" ? "solid" : "white",
          "state": step.state === "done" ? step.result === "exception" ? "warning" : step.result === "fail" ? "danger" : "success" : "primary",
          "size": "small",
          "shape": "circle"
        }, {
          default: () => [step.icon ? createVNode(PlIcon, {
            "name": step.icon
          }, null) : index + 1]
        }), createVNode("div", {
          "class": ["pl-steps-content", props.vertical && "__vertical"]
        }, [createVNode("div", {
          "class": "pl-steps-item-name"
        }, [step.name]), createVNode("div", {
          "class": "pl-steps-item-description"
        }, [step.description])])]), index + 1 !== ((_a2 = steps.value) == null ? void 0 : _a2.length) && createVNode("div", {
          "class": ["pl-steps-item-pipe", props.vertical && "__vertical"]
        }, null)]);
      })]);
    };
  }
});
export {
  Steps as default
};
//# sourceMappingURL=index.mjs.map
