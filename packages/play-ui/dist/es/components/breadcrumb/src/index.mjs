import { defineComponent, getCurrentInstance, createVNode, Fragment, withDirectives, vShow } from "vue";
import { useStep } from "../../../composables/useStep.mjs";
import { PlButton } from "../../button/index.mjs";
const Breadcrumb = /* @__PURE__ */ defineComponent({
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
    } = useStep(props.modelValue, emit);
    const instance = getCurrentInstance();
    const router = instance == null ? void 0 : instance.appContext.config.globalProperties.$router;
    const onClick = (index, breadcrumb) => {
      return () => {
        toggle(index);
        if (!breadcrumb.to || !router)
          return;
        props.replace ? router.replace(breadcrumb.to) : router.push(breadcrumb.to);
      };
    };
    return () => {
      var _a;
      return createVNode(Fragment, null, [(_a = steps.value) == null ? void 0 : _a.map((step, index) => createVNode(Fragment, null, [withDirectives(createVNode("span", null, [props.separator]), [[vShow, index !== 0]]), createVNode(PlButton, {
        "size": "mini",
        "type": "link",
        "iconLeft": step.icon,
        "state": current.value === index ? "primary" : "info",
        "onClick": onClick(index, step)
      }, {
        default: () => [step.name]
      })]))]);
    };
  }
});
export {
  Breadcrumb as default
};
//# sourceMappingURL=index.mjs.map
