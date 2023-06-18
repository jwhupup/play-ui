import { defineComponent, inject, ref, computed, onMounted, nextTick, createVNode, mergeProps } from "vue";
import { PlButton } from "../../button/index.mjs";
import { PL_TAB_KEY } from "./index.mjs";
const Header = /* @__PURE__ */ defineComponent({
  setup() {
    const {
      currentPaneId,
      headers,
      position
    } = inject(PL_TAB_KEY);
    const btnsWrpper = ref();
    const btns = ref();
    const thumbStyle = computed(() => {
      if (!btns.value)
        return;
      if (position.value === "top") {
        const width = `${btns.value[currentPaneId.value].clientWidth}px`;
        const transform2 = `translateX(${btns.value[currentPaneId.value].offsetLeft}px)`;
        return {
          width,
          transform: transform2
        };
      }
      const height = `${btns.value[currentPaneId.value].clientHeight}px`;
      const transform = `translateY(${btns.value[currentPaneId.value].offsetTop}px)`;
      return {
        height,
        transform
      };
    });
    onMounted(() => {
      nextTick(() => {
        btns.value = Array.from(btnsWrpper.value.children);
      });
    });
    const onClick = (id) => {
      return () => currentPaneId.value = id;
    };
    const renderHeaderButton = (hd) => createVNode(PlButton, mergeProps(hd, {
      "type": "link",
      "state": currentPaneId.value === hd.id ? "primary" : "info",
      "onClick": onClick(hd.id)
    }), {
      default: () => [hd.name]
    });
    return () => createVNode("div", {
      "class": ["pl-tabs-header", position.value]
    }, [createVNode("div", {
      "ref": btnsWrpper,
      "class": ["pl-tabs-button", position.value]
    }, [headers.value.map((hd) => renderHeaderButton(hd))]), createVNode("div", {
      "class": ["pl-tabs-slideway", position.value]
    }, [createVNode("div", {
      "class": "pl-tabs-thumb",
      "style": thumbStyle.value
    }, null)])]);
  }
});
export {
  Header as default
};
//# sourceMappingURL=header.mjs.map
