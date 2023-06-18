"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const useExpose = require("../../../composables/useExpose.js");
const scrollbarProps = {
  height: {
    type: Number,
    default: 400
  },
  minThumbSize: {
    type: Number,
    default: 20
  },
  behavior: {
    type: String,
    default: "auto"
  }
};
const Scrollbar = /* @__PURE__ */ vue.defineComponent({
  name: "Scrollbar",
  props: scrollbarProps,
  emits: ["scroll"],
  setup(props, {
    slots,
    emit
  }) {
    let beforeScrollTop = 0;
    let beforeScrollLeft = 0;
    const translateX = vue.ref(0);
    const translateY = vue.ref(0);
    const thumbWidth = vue.ref(0);
    const thumbHeight = vue.ref(0);
    const isShowBar = vue.ref(false);
    const isShowBarX = vue.ref(false);
    const isShowBarY = vue.ref(false);
    const wrpperEl = vue.ref();
    const thumbXEl = vue.ref();
    const thumbYEl = vue.ref();
    useExpose.useExpose({
      scrollto(options) {
        var _a;
        (_a = wrpperEl.value) == null ? void 0 : _a.scrollTo(options);
      }
    });
    const updateThumb = () => {
      if (!(wrpperEl == null ? void 0 : wrpperEl.value))
        return;
      thumbHeight.value = Math.max(wrpperEl.value.clientHeight ** 2 / wrpperEl.value.scrollHeight, props.minThumbSize);
      thumbWidth.value = Math.max(wrpperEl.value.clientWidth ** 2 / wrpperEl.value.scrollWidth, props.minThumbSize);
    };
    const scrollX = () => {
      var _a;
      (_a = wrpperEl.value) == null ? void 0 : _a.scrollTo({
        left: wrpperEl.value.scrollWidth * (translateX.value / wrpperEl.value.clientWidth),
        behavior: props.behavior
      });
    };
    const scrollY = () => {
      var _a;
      (_a = wrpperEl.value) == null ? void 0 : _a.scrollTo({
        top: wrpperEl.value.scrollHeight * (translateY.value / wrpperEl.value.clientHeight),
        behavior: props.behavior
      });
    };
    vue.watchEffect(() => {
      if (!(wrpperEl == null ? void 0 : wrpperEl.value))
        return;
      isShowBarY.value = wrpperEl.value.clientHeight < wrpperEl.value.scrollHeight;
      isShowBarX.value = wrpperEl.value.clientWidth < wrpperEl.value.scrollWidth;
      updateThumb();
    });
    const onMousedown = (isAxisY) => {
      return (evt) => {
        if (!wrpperEl.value)
          return;
        let moveStart = 0;
        let currentTranslate = 0;
        const isTrackEl = evt.target !== thumbXEl.value && evt.target !== thumbYEl.value;
        if (isAxisY) {
          currentTranslate = translateY.value;
          moveStart = evt.screenY;
        } else {
          currentTranslate = translateX.value;
          moveStart = evt.screenX;
        }
        if (isTrackEl) {
          if (isAxisY) {
            translateY.value = evt.offsetY - thumbHeight.value / 2;
            return scrollY();
          }
          translateX.value = evt.offsetX - thumbWidth.value / 2;
          return scrollX();
        }
        const movelistener = (evt2) => {
          if (!wrpperEl.value)
            return;
          const moveEnd = isAxisY ? evt2.screenY : evt2.screenX;
          if (isAxisY) {
            translateY.value = Math.max(Math.min(currentTranslate + moveEnd - moveStart, wrpperEl.value.clientHeight - thumbHeight.value), 0);
            return scrollY();
          }
          translateX.value = Math.max(Math.min(currentTranslate + moveEnd - moveStart, wrpperEl.value.clientWidth - thumbWidth.value), 0);
          return scrollX();
        };
        const defaultSelectstart = document.onselectstart;
        const clean = () => {
          document.removeEventListener("mousemove", movelistener);
          document.removeEventListener("mouseup", clean);
          document.onselectstart = defaultSelectstart;
        };
        document.addEventListener("mousemove", movelistener);
        document.addEventListener("mouseup", clean);
        document.onselectstart = () => false;
      };
    };
    const onScroll = (evt) => {
      const target = evt.target;
      if (beforeScrollTop !== target.scrollTop) {
        translateY.value = target.scrollTop * target.clientHeight / target.scrollHeight;
        beforeScrollTop = target.scrollTop;
      }
      if (beforeScrollLeft !== target.scrollLeft) {
        translateX.value = target.scrollLeft * target.clientWidth / target.scrollWidth;
        beforeScrollLeft = target.scrollLeft;
      }
      updateThumb();
      emit("scroll", evt);
    };
    const onMouseenter = () => {
      isShowBar.value = true;
    };
    const onMouseleave = () => {
      isShowBar.value = false;
    };
    return () => {
      var _a;
      return vue.createVNode("div", {
        "class": "pl-scrollbar",
        "style": `height: ${props.height}px`,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, [vue.createVNode("div", {
        "ref": wrpperEl,
        "class": "pl-scrollbar-wrpper",
        "onScroll": onScroll
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), vue.createVNode("div", {
        "class": "pl-scrollbar-bar pl-scrollbar-bar--x",
        "onMousedown": onMousedown(false)
      }, [vue.withDirectives(vue.createVNode("div", {
        "ref": thumbXEl,
        "class": "pl-scrollbar-bar-thumb pl-scrollbar-bar-thumb--x",
        "style": `width: ${thumbWidth.value}px; transform: translateX(${translateX.value}px)`
      }, null), [[vue.vShow, isShowBar.value && isShowBarX.value]])]), vue.createVNode("div", {
        "class": "pl-scrollbar-bar pl-scrollbar-bar--y",
        "onMousedown": onMousedown(true)
      }, [vue.withDirectives(vue.createVNode("div", {
        "ref": thumbYEl,
        "class": "pl-scrollbar-bar-thumb pl-scrollbar-bar-thumb--y",
        "style": `height: ${thumbHeight.value}px; transform: translateY(${translateY.value}px)`
      }, null), [[vue.vShow, isShowBar.value && isShowBarY.value]])])]);
    };
  }
});
exports.default = Scrollbar;
//# sourceMappingURL=index.js.map
