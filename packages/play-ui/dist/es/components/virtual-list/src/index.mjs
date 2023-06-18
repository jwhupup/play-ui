import { defineComponent, ref, computed, watchEffect, onMounted, onUpdated, createVNode, isVNode, Fragment } from "vue";
import { PlScrollbar } from "../../scrollbar/index.mjs";
import { range } from "../../../utils/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
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
const VirtualList = /* @__PURE__ */ defineComponent({
  name: "VirtualList",
  props: virtualListProps,
  setup(props, {
    slots
  }) {
    const start = ref(0);
    const end = ref(0);
    const step = ref(0);
    const translate = ref(0);
    const listHeight = ref(0);
    const scrollbarEl = ref();
    const itemInfos = computed(() => range(1, props.listItemCount, 1).map((_, index) => ({
      index,
      height: props.estimatedListItemHeight,
      top: props.estimatedListItemHeight * index,
      bottom: props.estimatedListItemHeight * (index + 1)
    })));
    const updateTranslate = () => {
      translate.value = start.value >= 1 ? itemInfos.value[start.value - 1].bottom : 0;
    };
    const getStart = (scrollTop = 0) => {
      var _a;
      return (_a = itemInfos.value.find((item) => item.bottom > scrollTop)) == null ? void 0 : _a.index;
    };
    const virtualAreaStyle = computed(() => ({
      height: `${listHeight.value}px`
    }));
    const realAreaStyle = computed(() => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${translate.value}px)`
    }));
    watchEffect(() => {
      listHeight.value = props.estimatedListItemHeight * props.listItemCount;
    });
    onMounted(() => {
      if (!scrollbarEl.value)
        return;
      step.value = end.value = Math.ceil(props.listHeight / props.estimatedListItemHeight);
    });
    onUpdated(() => {
      const items = document.querySelectorAll(".pl-virtual-list-item");
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const height = rect.height;
        const diff = itemInfos.value[index].height - height;
        if (diff) {
          itemInfos.value[index].height = height;
          itemInfos.value[index].bottom = rect.bottom - diff;
          for (let j = index + 1; j < itemInfos.value.length; j++) {
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
      return createVNode(Fragment, null, [createVNode("div", {
        "style": virtualAreaStyle.value
      }, null), createVNode("div", {
        "style": realAreaStyle.value
      }, [(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children) == null ? void 0 : _b.slice(start.value, end.value)])]);
    };
    return () => {
      let _slot;
      return createVNode(PlScrollbar, {
        "ref": scrollbarEl,
        "height": props.listHeight,
        "onScroll": onScroll
      }, _isSlot(_slot = renderVirtualList()) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
export {
  VirtualList as default
};
//# sourceMappingURL=index.mjs.map
