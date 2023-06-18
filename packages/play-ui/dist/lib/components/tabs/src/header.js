"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("../../button/index.js");
const index = require("./index.js");
const Header = /* @__PURE__ */ vue.defineComponent({
  setup() {
    const {
      currentPaneId,
      headers,
      position
    } = vue.inject(index.PL_TAB_KEY);
    const btnsWrpper = vue.ref();
    const btns = vue.ref();
    const thumbStyle = vue.computed(() => {
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
    vue.onMounted(() => {
      vue.nextTick(() => {
        btns.value = Array.from(btnsWrpper.value.children);
      });
    });
    const onClick = (id) => {
      return () => currentPaneId.value = id;
    };
    const renderHeaderButton = (hd) => vue.createVNode(index$1.PlButton, vue.mergeProps(hd, {
      "type": "link",
      "state": currentPaneId.value === hd.id ? "primary" : "info",
      "onClick": onClick(hd.id)
    }), {
      default: () => [hd.name]
    });
    return () => vue.createVNode("div", {
      "class": ["pl-tabs-header", position.value]
    }, [vue.createVNode("div", {
      "ref": btnsWrpper,
      "class": ["pl-tabs-button", position.value]
    }, [headers.value.map((hd) => renderHeaderButton(hd))]), vue.createVNode("div", {
      "class": ["pl-tabs-slideway", position.value]
    }, [vue.createVNode("div", {
      "class": "pl-tabs-thumb",
      "style": thumbStyle.value
    }, null)])]);
  }
});
exports.default = Header;
//# sourceMappingURL=header.js.map
