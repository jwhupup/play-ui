"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("../../scrollbar/index.js");
const index = require("../../../utils/index.js");
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !vue.isVNode(s);
}
const virtualListProps = {
  listHeight: {
    type: Number,
    default: 400
  },
  listItemCount: {
    type: Number,
    default: 0
  },
  estimatedListItemHeight: {
    type: Number,
    required: true
  }
};
const VirtualList = /* @__PURE__ */ vue.defineComponent({
  name: "VirtualList",
  props: virtualListProps,
  setup(props, {
    slots
  }) {
    const start = vue.ref(0);
    const end = vue.ref(0);
    const step = vue.ref(0);
    const translate = vue.ref(0);
    const listHeight = vue.ref(0);
    const scrollbarEl = vue.ref();
    const itemInfos = vue.computed(() => index.range(1, props.listItemCount, 1).map((_, index2) => ({
      index: index2,
      height: props.estimatedListItemHeight,
      top: props.estimatedListItemHeight * index2,
      bottom: props.estimatedListItemHeight * (index2 + 1)
    })));
    const updateTranslate = () => {
      translate.value = start.value >= 1 ? itemInfos.value[start.value - 1].bottom : 0;
    };
    const getStart = (scrollTop = 0) => {
      var _a;
      return (_a = itemInfos.value.find((item) => item.bottom > scrollTop)) == null ? void 0 : _a.index;
    };
    const virtualAreaStyle = vue.computed(() => ({
      height: `${listHeight.value}px`
    }));
    const realAreaStyle = vue.computed(() => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${translate.value}px)`
    }));
    vue.watchEffect(() => {
      listHeight.value = props.estimatedListItemHeight * props.listItemCount;
    });
    vue.onMounted(() => {
      if (!scrollbarEl.value)
        return;
      step.value = end.value = Math.ceil(props.listHeight / props.estimatedListItemHeight);
    });
    vue.onUpdated(() => {
      const items = document.querySelectorAll(".pl-virtual-list-item");
      items.forEach((item, index2) => {
        const rect = item.getBoundingClientRect();
        const height = rect.height;
        const diff = itemInfos.value[index2].height - height;
        if (diff) {
          itemInfos.value[index2].height = height;
          itemInfos.value[index2].bottom = rect.bottom - diff;
          for (let j = index2 + 1; j < itemInfos.value.length; j++) {
            itemInfos.value[j].top = itemInfos.value[j - 1].bottom;
            itemInfos.value[j].bottom = itemInfos.value[j].bottom - diff;
          }
        }
      });
      listHeight.value = itemInfos.value[itemInfos.value.length - 1].bottom;
      updateTranslate();
    });
    const onScroll = (evt) => {
      const scrollTop = evt.target.scrollTop;
      start.value = getStart(scrollTop);
      end.value = start.value + step.value;
      updateTranslate();
    };
    const renderVirtualList = () => {
      var _a, _b;
      return vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
        "style": virtualAreaStyle.value
      }, null), vue.createVNode("div", {
        "style": realAreaStyle.value
      }, [(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children) == null ? void 0 : _b.slice(start.value, end.value)])]);
    };
    return () => {
      let _slot;
      return vue.createVNode(index$1.PlScrollbar, {
        "ref": scrollbarEl,
        "height": props.listHeight,
        "onScroll": onScroll
      }, _isSlot(_slot = renderVirtualList()) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
exports.default = VirtualList;
//# sourceMappingURL=index.js.map
