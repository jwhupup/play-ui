"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const shared_esmBundler = require("../../../node_modules/.pnpm/@vue_shared@3.3.4/node_modules/@vue/shared/dist/shared.esm-bundler.js");
const useToggle = require("../../../composables/useToggle.js");
const index = require("../../../utils/index.js");
const index$2 = require("../../button/index.js");
const index$1 = require("../../icon/index.js");
const notificationProps = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  onCancel: Function,
  onConfirm: Function,
  autoClose: {
    type: Boolean,
    default: true
  },
  shakeOff: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: "left"
  }
};
const NotificationConstructor = /* @__PURE__ */ vue.defineComponent({
  name: "Notification",
  props: notificationProps,
  setup(props, {
    slots
  }) {
    const notify = useToggle.useToggle();
    notify.open();
    props.autoClose && notify.close({
      delay: 3e3
    });
    const animate = vue.computed(() => index.uppercaseFirstWord(props.placement));
    const isShake = (prop) => props.shakeOff.includes(prop);
    const onCancel = () => {
      var _a;
      return (_a = props.onCancel) == null ? void 0 : _a.call(props, notify);
    };
    const onConfirm = () => {
      var _a;
      return (_a = props.onConfirm) == null ? void 0 : _a.call(props, notify);
    };
    const renderNotification = () => {
      const renderIcon = () => {
        if (!isShake("icon"))
          return vue.createVNode(index$1.PlIcon, {
            "name": "bell"
          }, null);
      };
      const renderTitleContent = () => {
        const renderFn = [vue.createVNode("div", {
          "class": "pl-notification-content"
        }, [props.content])];
        if (!isShake("title"))
          renderFn.unshift(vue.createVNode("h3", {
            "class": "pl-notification-title"
          }, [props.title]));
        return renderFn;
      };
      const renderXButton = () => {
        if (!isShake("x-button")) {
          return vue.createVNode(index$2.PlButton, {
            "class": "pl-notification-close",
            "type": "link",
            "state": "info",
            "icon-left": "x-lg",
            "onClick": notify.close
          }, null);
        }
      };
      const renderButton = () => {
        const renderFn = [];
        if (props.cancelButtonText) {
          renderFn.push(vue.createVNode(index$2.PlButton, {
            "type": "link",
            "onClick": onCancel
          }, {
            default: props.cancelButtonText
          }));
        }
        if (props.confirmButtonText) {
          renderFn.push(vue.createVNode(index$2.PlButton, {
            "type": "link",
            "onClick": onConfirm
          }, {
            default: props.confirmButtonText
          }));
        }
        return renderFn;
      };
      return vue.createVNode("div", {
        "class": "pl-notification"
      }, [renderIcon(), vue.createVNode("main", null, [renderXButton(), renderTitleContent(), renderButton()])]);
    };
    return () => vue.createVNode(vue.Transition, {
      "enter-active-class": index.animation(`slideIn${animate.value}`),
      "leave-active-class": index.animation(`zoomOut${animate.value}`),
      "appear": true
    }, {
      default: () => {
        var _a;
        return [notify.state.value ? ((_a = slots.headless) == null ? void 0 : _a.call(slots)[0]) ?? renderNotification() : null];
      }
    });
  }
});
let notificationsContainer = null;
const Notification = (options) => {
  if (!notificationsContainer) {
    notificationsContainer = document.createElement("div");
    notificationsContainer.className = "pl-notification-container";
    document.body.appendChild(notificationsContainer);
  }
  const props = shared_esmBundler.isObject(options) ? {
    ...options
  } : null;
  const child = shared_esmBundler.isFunction(options) || vue.isVNode(options) ? {
    headless: shared_esmBundler.isFunction(options) ? options : () => options
  } : null;
  const container = document.createElement("div");
  const notification = vue.createVNode(NotificationConstructor, props, child);
  vue.render(notification, container);
  notificationsContainer.classList.add(`__${(options == null ? void 0 : options.placement) || "left"}`);
  notificationsContainer.appendChild(container.firstChild);
};
exports.NotificationConstructor = NotificationConstructor;
exports.default = Notification;
//# sourceMappingURL=index.js.map
