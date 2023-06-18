import { defineComponent as E, openBlock as P, createElementBlock as H, normalizeClass as z, provide as Mt, renderSlot as he, ref as k, inject as rt, unref as re, createBlock as ee, createCommentVNode as Q, Transition as Oe, withCtx as yn, createElementVNode as se, toDisplayString as ge, computed as L, watchEffect as Ce, onMounted as je, normalizeStyle as At, Fragment as X, renderList as Xe, toRaw as bn, createVNode as c, withDirectives as q, vShow as Y, watch as et, getCurrentInstance as Dt, watchPostEffect as wn, toValue as M, onUnmounted as xn, Teleport as Vt, createTextVNode as tt, mergeProps as ot, isVNode as Fe, render as It, nextTick as kn, onUpdated as On } from "vue";
import { isObject as Nt, isFunction as qe } from "@vue/shared";
const Cn = "Pl";
function T(e) {
  return e.install = (t) => {
    t.component(`${Cn}${e.name}`, e);
  }, e;
}
const Pt = (e) => typeof e == "number";
function Sn(e) {
  const t = setTimeout(() => {
    clearTimeout(t), e();
  }, 0);
}
function nt(e) {
  return e && e.toLowerCase().replace(/[a-z]{1}/, (t) => t.toUpperCase());
}
function Rt(e, t, n) {
  return Array.from(
    { length: (t - e) / n + 1 },
    (a, r) => e + r * n
  );
}
function R(e, t = "faster", n = 1) {
  return `  animate__animated animate__${e}   animate__${t}   animate__${n === "infinite" ? "infinite" : `__repeat-${n}`}`;
}
const Ye = /* @__PURE__ */ E({
  name: "Icon",
  __name: "index",
  props: {
    name: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = () => t("click");
    return (a, r) => (P(), H("i", {
      class: z(["bi", `bi-${a.name}`]),
      onClick: n
    }, null, 2));
  }
}), Pn = /* @__PURE__ */ E({
  name: "ButtonGroup",
  __name: "index",
  props: {
    type: { default: "solid" },
    state: { default: "info" },
    size: { default: "medium" },
    shape: { default: "rounded" },
    vertical: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    return Mt(zt, e), (n, a) => (P(), H("div", {
      class: z(["pl-button-group", { "is-vertical": n.vertical }])
    }, [
      he(n.$slots, "default")
    ], 2));
  }
}), jr = T(Pn), zt = Symbol("pl-button-group"), Xt = {
  type: {
    type: String,
    default: "solid"
  },
  nativeType: {
    type: String,
    default: "button"
  },
  state: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "medium"
  },
  shape: {
    type: String,
    default: "rounded"
  },
  iconLeft: String,
  iconRight: String,
  disabled: Boolean
}, En = ["type"], Te = /* @__PURE__ */ E({
  name: "Button",
  __name: "index",
  props: Xt,
  emits: ["click"],
  setup(e) {
    const t = k(), n = rt(zt, null);
    return (a, r) => {
      var l, o, s, i;
      return P(), H("button", {
        ref_key: "buttonEl",
        ref: t,
        type: a.nativeType,
        class: z(["pl-button", [
          `pl-button--${((l = re(n)) == null ? void 0 : l.type) || a.type}`,
          `pl-button--${((o = re(n)) == null ? void 0 : o.state) || a.state}`,
          `pl-button--${((s = re(n)) == null ? void 0 : s.shape) || a.shape}`,
          `pl-button--${((i = re(n)) == null ? void 0 : i.size) || a.size}`,
          a.disabled && "is-disabled"
        ]]),
        onClick: r[0] || (r[0] = (u) => a.$emit("click", u))
      }, [
        a.iconLeft ? (P(), ee(Ye, {
          key: 0,
          class: z({ "icon-left": a.$slots.default }),
          name: a.iconLeft
        }, null, 8, ["class", "name"])) : Q("", !0),
        he(a.$slots, "default"),
        a.iconRight ? (P(), ee(Ye, {
          key: 1,
          class: z({ "icon-righ": a.$slots.default }),
          name: a.iconRight
        }, null, 8, ["class", "name"])) : Q("", !0)
      ], 10, En);
    };
  }
}), $n = {
  key: 0,
  class: "pl-alert--title"
}, Tn = {
  key: 1,
  class: "pl-alert--description"
}, Bn = /* @__PURE__ */ E({
  name: "Alert",
  __name: "index",
  props: {
    type: { default: "solid" },
    state: { default: "info" },
    title: {},
    description: {},
    icon: {},
    closable: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = k(!0), a = k(), r = (l) => {
      n.value = !1, t("close", l);
    };
    return (l, o) => (P(), ee(Oe, {
      "leave-active-class": re(R)("fadeOut")
    }, {
      default: yn(() => [
        n.value ? (P(), H("div", {
          key: 0,
          ref_key: "alertEl",
          ref: a,
          class: z(["pl-alert", [`pl-alert--${l.type}`, `pl-alert--${l.state}`]])
        }, [
          l.icon ? (P(), ee(Ye, {
            key: 0,
            name: l.icon
          }, null, 8, ["name"])) : Q("", !0),
          se("div", null, [
            he(l.$slots, "title"),
            !l.$slots.title && l.title ? (P(), H("span", $n, ge(l.title), 1)) : Q("", !0),
            he(l.$slots, "default"),
            !l.$slots.default && l.description ? (P(), H("div", Tn, ge(l.description), 1)) : Q("", !0)
          ]),
          l.closable ? (P(), ee(Te, {
            key: 1,
            type: "link",
            state: "info",
            "icon-left": "x-lg",
            onClick: r
          })) : Q("", !0)
        ], 2)) : Q("", !0)
      ]),
      _: 3
    }, 8, ["leave-active-class"]));
  }
}), _n = T(Bn), Ln = { class: "pl-badge-container" }, Hn = /* @__PURE__ */ E({
  name: "Badge",
  __name: "index",
  props: {
    state: { default: "primary" },
    max: { default: 99 },
    value: {},
    dot: { type: Boolean },
    hidden: { type: Boolean }
  },
  setup(e) {
    const t = e, n = L(() => Number(t.value) >= t.max ? `${t.max}+` : t.value);
    return (a, r) => (P(), H("div", Ln, [
      he(a.$slots, "default"),
      se("div", {
        class: z(["pl-badge", [
          {
            "is-position": a.$slots.default,
            "is-dot": !a.value || a.dot,
            "is-hidden": a.hidden
          },
          `pl-badge--${a.state}`
        ]])
      }, ge(a.dot ? "" : n.value), 3)
    ]));
  }
}), jn = T(Hn), A = T(Te), lt = T(Ye), Wn = {
  key: 0,
  class: "is-indicator"
}, Mn = /* @__PURE__ */ E({
  name: "Tag",
  __name: "index",
  props: {
    type: { default: "solid" },
    shape: { default: "rounded" },
    state: { default: "primary" },
    closable: {},
    indicator: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = k(), a = (r) => {
      var l, o;
      (o = (l = n.value) == null ? void 0 : l.parentNode) == null || o.removeChild(n.value), t("close", r);
    };
    return (r, l) => (P(), H("div", {
      ref_key: "tagEl",
      ref: n,
      class: z(["pl-tag", [`pl-tag--${r.type}`, `pl-tag--${r.shape}`, `pl-tag--${r.state}`]])
    }, [
      r.indicator ? (P(), H("i", Wn)) : Q("", !0),
      he(r.$slots, "default"),
      r.closable ? (P(), ee(re(lt), {
        key: 1,
        class: "is-closable",
        name: "bi-x-lg",
        onClick: a
      })) : Q("", !0)
    ], 2));
  }
}), Wr = T(Mn), J = k({
  striped: !1,
  width: 0,
  columns: [],
  data: []
}), An = (e, t) => {
  let n = 0, a = 0;
  Ce(() => {
    J.value.width = e.width ?? 180, J.value.striped = e.striped ?? !1, J.value.data = e.data;
  }), J.value.columns.length = 0, r(e.header), je(() => {
    J.value.columns.forEach((o, s, i) => {
      var u, f, m, d;
      s === i.length - 1 ? (m = t.value) == null || m.style.setProperty(
        `--pl-table-column-${o.index}-width`,
        `${a > ((u = t.value) == null ? void 0 : u.clientWidth) ? J.value.width : ((f = t.value) == null ? void 0 : f.clientWidth) - a - 7}px`
      ) : (a += o.width ?? J.value.width, (d = t.value) == null || d.style.setProperty(`--pl-table-column-${o.index}-width`, `${o.width ?? J.value.width}px`));
    });
  });
  function r(l) {
    l.forEach((o) => {
      o.children ? r(o.children) : (o.index = n++, J.value.columns.push({ index: n, ...o }));
    });
  }
}, Dn = { class: "pl-table-cell" }, Vn = {
  key: 0,
  class: "pl-table-header-cell-children"
}, qt = /* @__PURE__ */ E({
  name: "HeaderCell",
  __name: "header-cell",
  props: {
    data: {}
  },
  setup(e) {
    const t = e, n = L(() => t.data.children ? "" : `width: var(--pl-table-column-${t.data.index}-width);`);
    return (a, r) => (P(), H("div", {
      class: "pl-table-header-cell",
      style: At(n.value)
    }, [
      se("div", Dn, ge(a.data.name), 1),
      a.data.children ? (P(), H("div", Vn, [
        (P(!0), H(X, null, Xe(a.data.children, (l) => (P(), ee(qt, {
          key: l.name,
          data: l
        }, null, 8, ["data"]))), 128))
      ])) : Q("", !0)
    ], 4));
  }
}), In = (e, t, n) => {
  bn(e);
}, Nn = { class: "pl-table-cell" }, Rn = /* @__PURE__ */ E({
  __name: "cell",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (P(), H("div", Nn, ge(t.data), 1));
  }
}), Yt = /* @__PURE__ */ E({
  name: "Row",
  __name: "row",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (P(!0), H(X, null, Xe(t.data, (a) => (P(), H(X, {
      key: a[t.key]
    }, [
      se("div", {
        class: z(["pl-table-row", { "pl-table-row--striped": re(J).striped }])
      }, [
        (P(!0), H(X, null, Xe(re(J).columns, (r, l) => (P(), ee(Rn, {
          key: l,
          data: a[r.key],
          style: At(`width: var(--pl-table-column-${l}-width);`),
          onContextmenu: (o) => re(In)(a, r.key, a[r.key])
        }, null, 8, ["data", "style", "onContextmenu"]))), 128))
      ], 2),
      a.children ? (P(), ee(Yt, {
        key: 0,
        data: a.children
      }, null, 8, ["data"])) : Q("", !0)
    ], 64))), 128));
  }
}), zn = { class: "pl-table-body" }, Xn = /* @__PURE__ */ E({
  name: "Tables",
  __name: "index",
  props: {
    width: {},
    header: {},
    data: {},
    fixedHeader: { type: Boolean },
    striped: { type: Boolean },
    border: { type: Boolean }
  },
  setup(e) {
    const t = e, n = k();
    return An(t, n), (a, r) => (P(), H("div", {
      ref_key: "tableEl",
      ref: n,
      class: z(["pl-table", { "pl-table--border": !a.border }])
    }, [
      se("div", {
        class: z(["pl-table-header", { "pl-table-header--fixed": a.fixedHeader }])
      }, [
        (P(!0), H(X, null, Xe(a.header, (l, o) => (P(), ee(qt, {
          key: o,
          data: l
        }, null, 8, ["data"]))), 128))
      ], 2),
      se("div", zn, [
        c(Yt, { data: a.data }, null, 8, ["data"])
      ])
    ], 2));
  }
}), Mr = T(Xn), qn = ["type", "value", "placeholder"], Yn = /* @__PURE__ */ E({
  name: "Input",
  __name: "index",
  props: {
    modelValue: {},
    type: { default: "bordered" },
    nativeType: { default: "text" },
    size: { default: "medium" },
    placeholder: {},
    rule: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const n = e, a = k(), r = k(!1), l = k("Please enter a valid value."), o = (s) => {
      var i, u, f, m, d;
      t("blur", s), (i = n.rule) != null && i.message && (l.value = (u = n.rule) == null ? void 0 : u.message), (f = n.rule) != null && f.require && !n.modelValue && (r.value = !n.modelValue), (m = n.rule) != null && m.pattern && n.modelValue && (r.value = !((d = n.rule) != null && d.pattern.test(String(n.modelValue))));
    };
    return (s, i) => (P(), H("div", null, [
      se("input", {
        ref_key: "inputEl",
        ref: a,
        class: z(["pl-input", [
          `pl-input--${s.type}`,
          `pl-input--${s.size}`,
          { "is-disabled": s.disabled }
        ]]),
        title: "",
        type: s.nativeType,
        value: s.modelValue,
        placeholder: s.placeholder,
        onBlur: o,
        onInput: i[0] || (i[0] = (u) => s.$emit("update:modelValue", u.target.value))
      }, null, 42, qn),
      q(se("div", { class: "pl-input-tip" }, ge(l.value), 513), [
        [Y, r.value]
      ])
    ]));
  }
}), Ar = T(Yn);
function it() {
  const e = k(!1);
  return {
    state: e,
    toggle: () => e.value = !e.value,
    open: () => e.value = !0,
    close: (o) => {
      o != null && o.delay ? setTimeout(() => e.value = !1, o.delay) : e.value = !1;
    },
    onOpen: (o) => et(e, () => e.value && (o == null ? void 0 : o())),
    onClose: (o) => et(e, () => e.value || (o == null ? void 0 : o()))
  };
}
function Ge(e) {
  const t = Dt();
  t && Object.assign(t.proxy, e);
}
function Ut(e, t) {
  const n = k(!1), a = (r) => {
    n.value = !1, n.value = !e.value.contains(r.target);
  };
  return wn(() => {
    t.value ? Sn(() => document.addEventListener("click", a)) : document.removeEventListener("click", a);
  }), {
    isOutside: n
  };
}
const Ft = (e) => {
  const t = k(), n = it(), { isOutside: a } = Ut(t, n.state);
  return et(n.state, (r) => e(r ? "open" : "close")), Ce(() => a.value && (n.state.value = !1)), Ge(n), {
    modal: Object.assign(t, n)
  };
}, Gt = (e = {}) => {
  const {
    min: t = -1 / 0,
    max: n = 1 / 0,
    initial: a = 0
  } = e, r = k(a);
  return {
    count: r,
    add: (i = 1) => {
      if (Pt(M(n)) && r.value < M(n)) {
        if (r.value + i > M(n))
          return r.value = M(n);
        r.value += i;
      }
    },
    sub: (i = 1) => {
      if (Pt(M(t)) && r.value > M(t)) {
        if (r.value - i < M(t))
          return r.value = M(t);
        r.value -= i;
      }
    },
    update: (i) => {
      i >= M(t) && i <= M(n) && (r.value = i);
    }
  };
}, Kt = (e, t) => {
  const n = L({
    get() {
      return e;
    },
    set(u) {
      t("update:modelValue", u);
    }
  }), {
    count: a,
    add: r,
    sub: l,
    update: o
  } = Gt({
    min: 0,
    max: L(() => n.value.length - 1)
  });
  return {
    steps: n,
    current: a,
    next: r,
    prev: l,
    toggle: o,
    add: (u) => {
      var f;
      (f = n.value) == null || f.push(u);
    },
    sub: (u) => {
      var f;
      (f = n.value) == null || f.splice(u, 1);
    }
  };
}, Un = (e, t = {}) => {
  const {
    target: n = document.documentElement,
    translateX: a = 0,
    translateY: r = 0
  } = t;
  let l, o;
  const s = k(), i = k({ x: 0, y: 0 });
  je(() => {
    l = M(e), o = M(n), !(!l || !o) && (l.addEventListener("dragstart", u), o.addEventListener("dragenter", f), o.addEventListener("dragover", m), o.addEventListener("dragleave", d), o.addEventListener("drop", y));
  }), xn(() => {
    !l || !o || (l.removeEventListener("dragstart", u), o.removeEventListener("dragenter", f), o.removeEventListener("dragover", m), o.removeEventListener("dragleave", d), o.removeEventListener("drop", y));
  });
  function u(h) {
    s.value = l == null ? void 0 : l.getBoundingClientRect(), i.value.x = h.clientX, i.value.y = h.clientY;
  }
  function f(h) {
    h.dataTransfer.dropEffect = "move";
  }
  function m(h) {
    h.preventDefault();
  }
  function d(h) {
    h.dataTransfer.dropEffect = "none";
  }
  function y(h) {
    !s.value || !l || (console.log(M(a)), l.style.position = "absolute", l.style.top = `${s.value.y + M(r) + h.clientY - i.value.y}px`, l.style.left = `${s.value.x + M(a) + h.clientX - i.value.x}px`);
  }
}, Fn = {
  shakeOff: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  cancelText: {
    type: String,
    default: "Cancel"
  },
  confirmText: {
    type: String,
    default: "Confirm"
  },
  draggable: Boolean
}, Gn = /* @__PURE__ */ E({
  name: "Modal",
  props: Fn,
  emits: ["open", "close", "cancel", "confirm"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const {
      modal: a
    } = Ft(n);
    Un(a, {
      translateX: L(() => a.state.value ? a.value.clientWidth / 2 : 0)
    });
    const r = (d) => e.shakeOff.includes(d), l = () => a.close() && n("cancel"), o = () => n("confirm"), s = () => a.close(), i = () => {
      if (!r("header") && e.title)
        return c("header", null, [c("h3", null, [e.title])]);
    }, u = () => {
      if (r("footer"))
        return;
      const d = [];
      return r("cancel-button") || d.push(c(Te, {
        type: "outline",
        onClick: l
      }, {
        default: e.cancelText
      })), r("confirm-button") || d.push(c(Te, {
        type: "solid",
        onClick: o
      }, {
        default: e.confirmText
      })), c("footer", null, [c("div", {
        class: "pl-modal-button"
      }, [d])]);
    }, f = () => {
      var h;
      const d = () => {
        if (!r("mask"))
          return c("div", {
            class: "pl-mask"
          }, null);
      }, y = () => {
        if (!r("x-button"))
          return c(Te, {
            class: "pl-modal-x",
            type: "link",
            state: "info",
            "icon-left": "x-lg",
            onClick: s
          }, null);
      };
      return c(X, null, [d(), c("div", {
        ref: a,
        class: "pl-modal",
        draggable: e.draggable
      }, [y(), i(), c("section", null, [(h = t.default) == null ? void 0 : h.call(t)]), u()])]);
    }, m = () => {
      var d;
      return c("div", {
        ref: a
      }, [(d = t.headless) == null ? void 0 : d.call(t)]);
    };
    return () => c(Vt, {
      to: "body"
    }, {
      default: () => [c(Oe, {
        "enter-active-class": R("fadeIn"),
        "leave-active-class": R("fadeOut"),
        appear: !0
      }, {
        default: () => [q(c("div", null, [t.headless ? m() : f()]), [[Y, a.state.value]])]
      })]
    });
  }
}), Dr = T(Gn), Kn = {
  shakeOff: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: "left"
  },
  fullscreen: Boolean
}, Jn = /* @__PURE__ */ E({
  name: "Drawer",
  props: Kn,
  emits: ["open", "close"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const {
      modal: a
    } = Ft(n), r = L(() => e.placement === "left" || e.placement === "right" ? {
      minWidth: e.fullscreen ? "100%" : "350px",
      top: 0,
      bottom: 0,
      [e.placement]: 0
    } : e.placement === "top" || e.placement === "bottom" ? {
      height: e.fullscreen ? "100%" : 0,
      minHeight: "350px",
      left: 0,
      right: 0,
      [e.placement]: 0
    } : {}), l = L(() => {
      const u = nt(e.placement === "top" ? "down" : e.placement === "bottom" ? "up" : e.placement), f = nt(e.placement === "top" ? "up" : e.placement === "bottom" ? "down" : e.placement);
      return {
        enter: R(`slideIn${u}`),
        leave: R(`slideOut${f}`)
      };
    }), o = (u) => e.shakeOff.includes(u), s = () => {
      if (!o("mask"))
        return q(c("div", {
          class: "pl-mask"
        }, null), [[Y, a.state.value]]);
    }, i = () => {
      var f;
      return c("div", {
        class: "pl-darwer-default"
      }, [(() => {
        if (o("header"))
          return;
        const m = () => {
          if (!o("x-button"))
            return c(A, {
              type: "link",
              state: "info",
              "icon-left": "x-lg",
              onClick: a.close
            }, null);
        };
        return c("header", null, [c("h3", null, [tt("Darwer header")]), m()]);
      })(), c("section", null, [(f = t.default) == null ? void 0 : f.call(t)])]);
    };
    return () => c(Vt, {
      to: "body"
    }, {
      default: () => [s(), c(Oe, {
        "enter-active-class": R(l.value.enter),
        "leave-active-class": R(l.value.leave),
        appear: !0
      }, {
        default: () => {
          var u;
          return [q(c("div", {
            ref: a,
            class: "pl-darwer",
            style: r.value
          }, [((u = t.headless) == null ? void 0 : u.call(t)) || i()]), [[Y, a.state.value]])];
        }
      })]
    });
  }
}), Vr = T(Jn);
var D = "top", F = "bottom", G = "right", V = "left", st = "auto", We = [D, F, G, V], ye = "start", Le = "end", Qn = "clippingParents", Jt = "viewport", Ee = "popper", Zn = "reference", Et = We.reduce(function(e, t) {
  return e.concat([t + "-" + ye, t + "-" + Le]);
}, []), Qt = [].concat(We, [st]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ye, t + "-" + Le]);
}, []), ea = "beforeRead", ta = "read", na = "afterRead", aa = "beforeMain", ra = "main", oa = "afterMain", la = "beforeWrite", ia = "write", sa = "afterWrite", ua = [ea, ta, na, aa, ra, oa, la, ia, sa];
function ne(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Z(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function be(e) {
  var t = Z(e).Element;
  return e instanceof t || e instanceof Element;
}
function U(e) {
  var t = Z(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ut(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Z(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ca(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var a = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
    !U(l) || !ne(l) || (Object.assign(l.style, a), Object.keys(r).forEach(function(o) {
      var s = r[o];
      s === !1 ? l.removeAttribute(o) : l.setAttribute(o, s === !0 ? "" : s);
    }));
  });
}
function da(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var r = t.elements[a], l = t.attributes[a] || {}, o = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a]), s = o.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !U(r) || !ne(r) || (Object.assign(r.style, s), Object.keys(l).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Zt = { name: "applyStyles", enabled: !0, phase: "write", fn: ca, effect: da, requires: ["computeStyles"] };
function te(e) {
  return e.split("-")[0];
}
var pe = Math.max, Ue = Math.min, we = Math.round;
function xe(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), a = 1, r = 1;
  if (U(e) && t) {
    var l = e.offsetHeight, o = e.offsetWidth;
    o > 0 && (a = we(n.width) / o || 1), l > 0 && (r = we(n.height) / l || 1);
  }
  return { width: n.width / a, height: n.height / r, top: n.top / r, right: n.right / a, bottom: n.bottom / r, left: n.left / a, x: n.left / a, y: n.top / r };
}
function ct(e) {
  var t = xe(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: a };
}
function en(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ut(n)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function oe(e) {
  return Z(e).getComputedStyle(e);
}
function fa(e) {
  return ["table", "td", "th"].indexOf(ne(e)) >= 0;
}
function ue(e) {
  return ((be(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ke(e) {
  return ne(e) === "html" ? e : e.assignedSlot || e.parentNode || (ut(e) ? e.host : null) || ue(e);
}
function $t(e) {
  return !U(e) || oe(e).position === "fixed" ? null : e.offsetParent;
}
function pa(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && U(e)) {
    var a = oe(e);
    if (a.position === "fixed")
      return null;
  }
  var r = Ke(e);
  for (ut(r) && (r = r.host); U(r) && ["html", "body"].indexOf(ne(r)) < 0; ) {
    var l = oe(r);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function Me(e) {
  for (var t = Z(e), n = $t(e); n && fa(n) && oe(n).position === "static"; )
    n = $t(n);
  return n && (ne(n) === "html" || ne(n) === "body" && oe(n).position === "static") ? t : n || pa(e) || t;
}
function dt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Be(e, t, n) {
  return pe(e, Ue(t, n));
}
function va(e, t, n) {
  var a = Be(e, t, n);
  return a > n ? n : a;
}
function tn() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function nn(e) {
  return Object.assign({}, tn(), e);
}
function an(e, t) {
  return t.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
var ma = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, nn(typeof e != "number" ? e : an(e, We));
};
function ha(e) {
  var t, n = e.state, a = e.name, r = e.options, l = n.elements.arrow, o = n.modifiersData.popperOffsets, s = te(n.placement), i = dt(s), u = [V, G].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!l || !o)) {
    var m = ma(r.padding, n), d = ct(l), y = i === "y" ? D : V, h = i === "y" ? F : G, p = n.rects.reference[f] + n.rects.reference[i] - o[i] - n.rects.popper[f], v = o[i] - n.rects.reference[i], g = Me(l), x = g ? i === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = p / 2 - v / 2, O = m[y], C = x - d[f] - m[h], w = x / 2 - d[f] / 2 + S, b = Be(O, w, C), $ = i;
    n.modifiersData[a] = (t = {}, t[$] = b, t.centerOffset = b - w, t);
  }
}
function ga(e) {
  var t = e.state, n = e.options, a = n.element, r = a === void 0 ? "[data-popper-arrow]" : a;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !en(t.elements.popper, r) || (t.elements.arrow = r));
}
var ya = { name: "arrow", enabled: !0, phase: "main", fn: ha, effect: ga, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ke(e) {
  return e.split("-")[1];
}
var ba = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function wa(e) {
  var t = e.x, n = e.y, a = window, r = a.devicePixelRatio || 1;
  return { x: we(t * r) / r || 0, y: we(n * r) / r || 0 };
}
function Tt(e) {
  var t, n = e.popper, a = e.popperRect, r = e.placement, l = e.variation, o = e.offsets, s = e.position, i = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, d = o.x, y = d === void 0 ? 0 : d, h = o.y, p = h === void 0 ? 0 : h, v = typeof f == "function" ? f({ x: y, y: p }) : { x: y, y: p };
  y = v.x, p = v.y;
  var g = o.hasOwnProperty("x"), x = o.hasOwnProperty("y"), S = V, O = D, C = window;
  if (u) {
    var w = Me(n), b = "clientHeight", $ = "clientWidth";
    if (w === Z(n) && (w = ue(n), oe(w).position !== "static" && s === "absolute" && (b = "scrollHeight", $ = "scrollWidth")), w = w, r === D || (r === V || r === G) && l === Le) {
      O = F;
      var _ = m && w === C && C.visualViewport ? C.visualViewport.height : w[b];
      p -= _ - a.height, p *= i ? 1 : -1;
    }
    if (r === V || (r === D || r === F) && l === Le) {
      S = G;
      var j = m && w === C && C.visualViewport ? C.visualViewport.width : w[$];
      y -= j - a.width, y *= i ? 1 : -1;
    }
  }
  var B = Object.assign({ position: s }, u && ba), I = f === !0 ? wa({ x: y, y: p }) : { x: y, y: p };
  if (y = I.x, p = I.y, i) {
    var W;
    return Object.assign({}, B, (W = {}, W[O] = x ? "0" : "", W[S] = g ? "0" : "", W.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + p + "px)" : "translate3d(" + y + "px, " + p + "px, 0)", W));
  }
  return Object.assign({}, B, (t = {}, t[O] = x ? p + "px" : "", t[S] = g ? y + "px" : "", t.transform = "", t));
}
function xa(e) {
  var t = e.state, n = e.options, a = n.gpuAcceleration, r = a === void 0 ? !0 : a, l = n.adaptive, o = l === void 0 ? !0 : l, s = n.roundOffsets, i = s === void 0 ? !0 : s, u = { placement: te(t.placement), variation: ke(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tt(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tt(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var rn = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: xa, data: {} }, Re = { passive: !0 };
function ka(e) {
  var t = e.state, n = e.instance, a = e.options, r = a.scroll, l = r === void 0 ? !0 : r, o = a.resize, s = o === void 0 ? !0 : o, i = Z(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Re);
  }), s && i.addEventListener("resize", n.update, Re), function() {
    l && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Re);
    }), s && i.removeEventListener("resize", n.update, Re);
  };
}
var on = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ka, data: {} }, Oa = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ze(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Oa[t];
  });
}
var Ca = { start: "end", end: "start" };
function Bt(e) {
  return e.replace(/start|end/g, function(t) {
    return Ca[t];
  });
}
function ft(e) {
  var t = Z(e), n = t.pageXOffset, a = t.pageYOffset;
  return { scrollLeft: n, scrollTop: a };
}
function pt(e) {
  return xe(ue(e)).left + ft(e).scrollLeft;
}
function Sa(e) {
  var t = Z(e), n = ue(e), a = t.visualViewport, r = n.clientWidth, l = n.clientHeight, o = 0, s = 0;
  return a && (r = a.width, l = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = a.offsetLeft, s = a.offsetTop)), { width: r, height: l, x: o + pt(e), y: s };
}
function Pa(e) {
  var t, n = ue(e), a = ft(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = pe(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), o = pe(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -a.scrollLeft + pt(e), i = -a.scrollTop;
  return oe(r || n).direction === "rtl" && (s += pe(n.clientWidth, r ? r.clientWidth : 0) - l), { width: l, height: o, x: s, y: i };
}
function vt(e) {
  var t = oe(e), n = t.overflow, a = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + a);
}
function ln(e) {
  return ["html", "body", "#document"].indexOf(ne(e)) >= 0 ? e.ownerDocument.body : U(e) && vt(e) ? e : ln(Ke(e));
}
function _e(e, t) {
  var n;
  t === void 0 && (t = []);
  var a = ln(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = Z(a), o = r ? [l].concat(l.visualViewport || [], vt(a) ? a : []) : a, s = t.concat(o);
  return r ? s : s.concat(_e(Ke(o)));
}
function at(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ea(e) {
  var t = xe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function _t(e, t) {
  return t === Jt ? at(Sa(e)) : be(t) ? Ea(t) : at(Pa(ue(e)));
}
function $a(e) {
  var t = _e(Ke(e)), n = ["absolute", "fixed"].indexOf(oe(e).position) >= 0, a = n && U(e) ? Me(e) : e;
  return be(a) ? t.filter(function(r) {
    return be(r) && en(r, a) && ne(r) !== "body";
  }) : [];
}
function Ta(e, t, n) {
  var a = t === "clippingParents" ? $a(e) : [].concat(t), r = [].concat(a, [n]), l = r[0], o = r.reduce(function(s, i) {
    var u = _t(e, i);
    return s.top = pe(u.top, s.top), s.right = Ue(u.right, s.right), s.bottom = Ue(u.bottom, s.bottom), s.left = pe(u.left, s.left), s;
  }, _t(e, l));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function sn(e) {
  var t = e.reference, n = e.element, a = e.placement, r = a ? te(a) : null, l = a ? ke(a) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case D:
      i = { x: o, y: t.y - n.height };
      break;
    case F:
      i = { x: o, y: t.y + t.height };
      break;
    case G:
      i = { x: t.x + t.width, y: s };
      break;
    case V:
      i = { x: t.x - n.width, y: s };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? dt(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (l) {
      case ye:
        i[u] = i[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Le:
        i[u] = i[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return i;
}
function He(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = a === void 0 ? e.placement : a, l = n.boundary, o = l === void 0 ? Qn : l, s = n.rootBoundary, i = s === void 0 ? Jt : s, u = n.elementContext, f = u === void 0 ? Ee : u, m = n.altBoundary, d = m === void 0 ? !1 : m, y = n.padding, h = y === void 0 ? 0 : y, p = nn(typeof h != "number" ? h : an(h, We)), v = f === Ee ? Zn : Ee, g = e.rects.popper, x = e.elements[d ? v : f], S = Ta(be(x) ? x : x.contextElement || ue(e.elements.popper), o, i), O = xe(e.elements.reference), C = sn({ reference: O, element: g, strategy: "absolute", placement: r }), w = at(Object.assign({}, g, C)), b = f === Ee ? w : O, $ = { top: S.top - b.top + p.top, bottom: b.bottom - S.bottom + p.bottom, left: S.left - b.left + p.left, right: b.right - S.right + p.right }, _ = e.modifiersData.offset;
  if (f === Ee && _) {
    var j = _[r];
    Object.keys($).forEach(function(B) {
      var I = [G, F].indexOf(B) >= 0 ? 1 : -1, W = [D, F].indexOf(B) >= 0 ? "y" : "x";
      $[B] += j[W] * I;
    });
  }
  return $;
}
function Ba(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = n.boundary, l = n.rootBoundary, o = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Qt : i, f = ke(a), m = f ? s ? Et : Et.filter(function(h) {
    return ke(h) === f;
  }) : We, d = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  d.length === 0 && (d = m);
  var y = d.reduce(function(h, p) {
    return h[p] = He(e, { placement: p, boundary: r, rootBoundary: l, padding: o })[te(p)], h;
  }, {});
  return Object.keys(y).sort(function(h, p) {
    return y[h] - y[p];
  });
}
function _a(e) {
  if (te(e) === st)
    return [];
  var t = ze(e);
  return [Bt(e), t, Bt(t)];
}
function La(e) {
  var t = e.state, n = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var r = n.mainAxis, l = r === void 0 ? !0 : r, o = n.altAxis, s = o === void 0 ? !0 : o, i = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, d = n.altBoundary, y = n.flipVariations, h = y === void 0 ? !0 : y, p = n.allowedAutoPlacements, v = t.options.placement, g = te(v), x = g === v, S = i || (x || !h ? [ze(v)] : _a(v)), O = [v].concat(S).reduce(function(de, ae) {
      return de.concat(te(ae) === st ? Ba(t, { placement: ae, boundary: f, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: p }) : ae);
    }, []), C = t.rects.reference, w = t.rects.popper, b = /* @__PURE__ */ new Map(), $ = !0, _ = O[0], j = 0; j < O.length; j++) {
      var B = O[j], I = te(B), W = ke(B) === ye, le = [D, F].indexOf(I) >= 0, ie = le ? "width" : "height", N = He(t, { placement: B, boundary: f, rootBoundary: m, altBoundary: d, padding: u }), K = le ? W ? G : V : W ? F : D;
      C[ie] > w[ie] && (K = ze(K));
      var Ae = ze(K), ce = [];
      if (l && ce.push(N[I] <= 0), s && ce.push(N[K] <= 0, N[Ae] <= 0), ce.every(function(de) {
        return de;
      })) {
        _ = B, $ = !1;
        break;
      }
      b.set(B, ce);
    }
    if ($)
      for (var De = h ? 3 : 1, Je = function(de) {
        var ae = O.find(function(Ie) {
          var Pe = b.get(Ie);
          if (Pe)
            return Pe.slice(0, de).every(function(ve) {
              return ve;
            });
        });
        if (ae)
          return _ = ae, "break";
      }, Se = De; Se > 0; Se--) {
        var Ve = Je(Se);
        if (Ve === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[a]._skip = !0, t.placement = _, t.reset = !0);
  }
}
var Ha = { name: "flip", enabled: !0, phase: "main", fn: La, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Lt(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ht(e) {
  return [D, G, F, V].some(function(t) {
    return e[t] >= 0;
  });
}
function ja(e) {
  var t = e.state, n = e.name, a = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, o = He(t, { elementContext: "reference" }), s = He(t, { altBoundary: !0 }), i = Lt(o, a), u = Lt(s, r, l), f = Ht(i), m = Ht(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var Wa = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ja };
function Ma(e, t, n) {
  var a = te(e), r = [V, D].indexOf(a) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = l[0], s = l[1];
  return o = o || 0, s = (s || 0) * r, [V, G].indexOf(a) >= 0 ? { x: s, y: o } : { x: o, y: s };
}
function Aa(e) {
  var t = e.state, n = e.options, a = e.name, r = n.offset, l = r === void 0 ? [0, 0] : r, o = Qt.reduce(function(f, m) {
    return f[m] = Ma(m, t.rects, l), f;
  }, {}), s = o[t.placement], i = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[a] = o;
}
var Da = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Aa };
function Va(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = sn({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var un = { name: "popperOffsets", enabled: !0, phase: "read", fn: Va, data: {} };
function Ia(e) {
  return e === "x" ? "y" : "x";
}
function Na(e) {
  var t = e.state, n = e.options, a = e.name, r = n.mainAxis, l = r === void 0 ? !0 : r, o = n.altAxis, s = o === void 0 ? !1 : o, i = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, d = n.tether, y = d === void 0 ? !0 : d, h = n.tetherOffset, p = h === void 0 ? 0 : h, v = He(t, { boundary: i, rootBoundary: u, padding: m, altBoundary: f }), g = te(t.placement), x = ke(t.placement), S = !x, O = dt(g), C = Ia(O), w = t.modifiersData.popperOffsets, b = t.rects.reference, $ = t.rects.popper, _ = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, j = typeof _ == "number" ? { mainAxis: _, altAxis: _ } : Object.assign({ mainAxis: 0, altAxis: 0 }, _), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = { x: 0, y: 0 };
  if (w) {
    if (l) {
      var W, le = O === "y" ? D : V, ie = O === "y" ? F : G, N = O === "y" ? "height" : "width", K = w[O], Ae = K + v[le], ce = K - v[ie], De = y ? -$[N] / 2 : 0, Je = x === ye ? b[N] : $[N], Se = x === ye ? -$[N] : -b[N], Ve = t.elements.arrow, de = y && Ve ? ct(Ve) : { width: 0, height: 0 }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : tn(), Ie = ae[le], Pe = ae[ie], ve = Be(0, b[N], de[N]), dn = S ? b[N] / 2 - De - ve - Ie - j.mainAxis : Je - ve - Ie - j.mainAxis, fn = S ? -b[N] / 2 + De + ve + Pe + j.mainAxis : Se + ve + Pe + j.mainAxis, Qe = t.elements.arrow && Me(t.elements.arrow), pn = Qe ? O === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, gt = (W = B == null ? void 0 : B[O]) != null ? W : 0, vn = K + dn - gt - pn, mn = K + fn - gt, yt = Be(y ? Ue(Ae, vn) : Ae, K, y ? pe(ce, mn) : ce);
      w[O] = yt, I[O] = yt - K;
    }
    if (s) {
      var bt, hn = O === "x" ? D : V, gn = O === "x" ? F : G, fe = w[C], Ne = C === "y" ? "height" : "width", wt = fe + v[hn], xt = fe - v[gn], Ze = [D, V].indexOf(g) !== -1, kt = (bt = B == null ? void 0 : B[C]) != null ? bt : 0, Ot = Ze ? wt : fe - b[Ne] - $[Ne] - kt + j.altAxis, Ct = Ze ? fe + b[Ne] + $[Ne] - kt - j.altAxis : xt, St = y && Ze ? va(Ot, fe, Ct) : Be(y ? Ot : wt, fe, y ? Ct : xt);
      w[C] = St, I[C] = St - fe;
    }
    t.modifiersData[a] = I;
  }
}
var Ra = { name: "preventOverflow", enabled: !0, phase: "main", fn: Na, requiresIfExists: ["offset"] };
function za(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Xa(e) {
  return e === Z(e) || !U(e) ? ft(e) : za(e);
}
function qa(e) {
  var t = e.getBoundingClientRect(), n = we(t.width) / e.offsetWidth || 1, a = we(t.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function Ya(e, t, n) {
  n === void 0 && (n = !1);
  var a = U(t), r = U(t) && qa(t), l = ue(t), o = xe(e, r), s = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (a || !a && !n) && ((ne(t) !== "body" || vt(l)) && (s = Xa(t)), U(t) ? (i = xe(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = pt(l))), { x: o.left + s.scrollLeft - i.x, y: o.top + s.scrollTop - i.y, width: o.width, height: o.height };
}
function Ua(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function r(l) {
    n.add(l.name);
    var o = [].concat(l.requires || [], l.requiresIfExists || []);
    o.forEach(function(s) {
      if (!n.has(s)) {
        var i = t.get(s);
        i && r(i);
      }
    }), a.push(l);
  }
  return e.forEach(function(l) {
    n.has(l.name) || r(l);
  }), a;
}
function Fa(e) {
  var t = Ua(e);
  return ua.reduce(function(n, a) {
    return n.concat(t.filter(function(r) {
      return r.phase === a;
    }));
  }, []);
}
function Ga(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ka(e) {
  var t = e.reduce(function(n, a) {
    var r = n[a.name];
    return n[a.name] = r ? Object.assign({}, r, a, { options: Object.assign({}, r.options, a.options), data: Object.assign({}, r.data, a.data) }) : a, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var jt = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Wt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function mt(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, a = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? jt : r;
  return function(o, s, i) {
    i === void 0 && (i = l);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, jt, l), modifiersData: {}, elements: { reference: o, popper: s }, attributes: {}, styles: {} }, f = [], m = !1, d = { state: u, setOptions: function(p) {
      var v = typeof p == "function" ? p(u.options) : p;
      h(), u.options = Object.assign({}, l, u.options, v), u.scrollParents = { reference: be(o) ? _e(o) : o.contextElement ? _e(o.contextElement) : [], popper: _e(s) };
      var g = Fa(Ka([].concat(a, u.options.modifiers)));
      return u.orderedModifiers = g.filter(function(x) {
        return x.enabled;
      }), y(), d.update();
    }, forceUpdate: function() {
      if (!m) {
        var p = u.elements, v = p.reference, g = p.popper;
        if (Wt(v, g)) {
          u.rects = { reference: Ya(v, Me(g), u.options.strategy === "fixed"), popper: ct(g) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var x = 0; x < u.orderedModifiers.length; x++) {
            if (u.reset === !0) {
              u.reset = !1, x = -1;
              continue;
            }
            var S = u.orderedModifiers[x], O = S.fn, C = S.options, w = C === void 0 ? {} : C, b = S.name;
            typeof O == "function" && (u = O({ state: u, options: w, name: b, instance: d }) || u);
          }
        }
      }
    }, update: Ga(function() {
      return new Promise(function(p) {
        d.forceUpdate(), p(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!Wt(o, s))
      return d;
    d.setOptions(i).then(function(p) {
      !m && i.onFirstUpdate && i.onFirstUpdate(p);
    });
    function y() {
      u.orderedModifiers.forEach(function(p) {
        var v = p.name, g = p.options, x = g === void 0 ? {} : g, S = p.effect;
        if (typeof S == "function") {
          var O = S({ state: u, name: v, instance: d, options: x }), C = function() {
          };
          f.push(O || C);
        }
      });
    }
    function h() {
      f.forEach(function(p) {
        return p();
      }), f = [];
    }
    return d;
  };
}
mt();
var Ja = [on, un, rn, Zt];
mt({ defaultModifiers: Ja });
var Qa = [on, un, rn, Zt, Da, Ha, Ra, ya, Wa], Za = mt({ defaultModifiers: Qa });
const er = {
  title: String,
  content: String,
  placement: {
    type: String,
    default: "auto"
  },
  trigger: {
    type: String,
    default: "hover"
  }
}, tr = /* @__PURE__ */ E({
  name: "Popover",
  props: er,
  setup(e, {
    slots: t
  }) {
    let n, a = !0, r;
    const l = k(!1), o = k(), s = k(), i = k();
    je(() => {
      r = Za(s.value, o.value, {
        placement: e.placement,
        modifiers: [{
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }]
      });
    });
    const u = (v) => {
      l.value = v, r.setOptions((g) => ({
        ...g,
        modifiers: [...g.modifiers, {
          name: "eventListeners",
          enabled: v
        }]
      })), v && r.update();
    }, f = () => {
      l.value || u(!l.value);
    }, m = (v) => {
      e.trigger === "click" && (v.stopPropagation(), u(!l.value));
    }, d = () => {
      a = !1, u(!0);
    }, y = () => {
      a = !0, n = setTimeout(() => {
        clearTimeout(n), a && u(!1);
      }, 300);
    }, h = L(() => {
      if (e.trigger === "hover")
        return {
          onMouseenter: d,
          onMouseleave: y
        };
      const {
        isOutside: v
      } = Ut(i, l);
      return Ce(() => v.value && (l.value = !1)), {
        onClick: f
      };
    }), p = () => c(X, null, [c("div", null, [e.title]), c("div", null, [e.content])]);
    return () => {
      var v;
      return c("div", ot({
        class: "pl-popover",
        ref: i
      }, h.value), [c(Oe, {
        "enter-active-class": R("fadeIn"),
        "leave-active-class": R("fadeOut"),
        appear: !0
      }, {
        default: () => {
          var g, x;
          return [q(c("div", {
            id: "pl-popover",
            ref: o,
            class: !t.headless && "pl-popover-content"
          }, [((g = t.headless) == null ? void 0 : g.call(t)) || ((x = t.default) == null ? void 0 : x.call(t)) || p(), t.headless ? null : c("div", {
            id: "pl-popover-arrow",
            "data-popper-arrow": !0
          }, null)]), [[Y, l.value]])];
        }
      }), c("div", {
        class: "pl-popover-reference",
        ref: s,
        onClick: m
      }, [(v = t.reference) == null ? void 0 : v.call(t)])]);
    };
  }
}), cn = T(tr), nr = /* @__PURE__ */ E({
  name: "Tooltip",
  props: {
    content: String,
    placement: {
      type: String,
      default: "auto"
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = () => c("div", {
      class: "pl-tooltip"
    }, [e.content]);
    return () => c(cn, e, {
      headless: t.headless || n,
      reference: t.reference
    });
  }
}), Ir = T(nr), ar = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  onCancel: Function,
  onConfirm: Function,
  autoClose: {
    type: Boolean,
    default: !0
  },
  shakeOff: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: "left"
  }
}, rr = /* @__PURE__ */ E({
  name: "Notification",
  props: ar,
  setup(e, {
    slots: t
  }) {
    const n = it();
    n.open(), e.autoClose && n.close({
      delay: 3e3
    });
    const a = L(() => nt(e.placement)), r = (i) => e.shakeOff.includes(i), l = () => {
      var i;
      return (i = e.onCancel) == null ? void 0 : i.call(e, n);
    }, o = () => {
      var i;
      return (i = e.onConfirm) == null ? void 0 : i.call(e, n);
    }, s = () => {
      const i = () => {
        if (!r("icon"))
          return c(lt, {
            name: "bell"
          }, null);
      }, u = () => {
        const d = [c("div", {
          class: "pl-notification-content"
        }, [e.content])];
        return r("title") || d.unshift(c("h3", {
          class: "pl-notification-title"
        }, [e.title])), d;
      }, f = () => {
        if (!r("x-button"))
          return c(A, {
            class: "pl-notification-close",
            type: "link",
            state: "info",
            "icon-left": "x-lg",
            onClick: n.close
          }, null);
      }, m = () => {
        const d = [];
        return e.cancelButtonText && d.push(c(A, {
          type: "link",
          onClick: l
        }, {
          default: e.cancelButtonText
        })), e.confirmButtonText && d.push(c(A, {
          type: "link",
          onClick: o
        }, {
          default: e.confirmButtonText
        })), d;
      };
      return c("div", {
        class: "pl-notification"
      }, [i(), c("main", null, [f(), u(), m()])]);
    };
    return () => c(Oe, {
      "enter-active-class": R(`slideIn${a.value}`),
      "leave-active-class": R(`zoomOut${a.value}`),
      appear: !0
    }, {
      default: () => {
        var i;
        return [n.state.value ? ((i = t.headless) == null ? void 0 : i.call(t)[0]) ?? s() : null];
      }
    });
  }
});
let me = null;
const or = (e) => {
  me || (me = document.createElement("div"), me.className = "pl-notification-container", document.body.appendChild(me));
  const t = Nt(e) ? {
    ...e
  } : null, n = qe(e) || Fe(e) ? {
    headless: qe(e) ? e : () => e
  } : null, a = document.createElement("div"), r = c(rr, t, n);
  It(r, a), me.classList.add(`__${(e == null ? void 0 : e.placement) || "left"}`), me.appendChild(a.firstChild);
}, Nr = or, lr = {
  content: String,
  shakeOff: {
    type: Array,
    default: () => []
  },
  state: {
    type: String,
    default: "info"
  },
  autoClose: {
    type: Boolean,
    default: !0
  }
}, ir = /* @__PURE__ */ E({
  name: "Message",
  props: lr,
  setup(e, {
    slots: t
  }) {
    const n = it();
    n.open(), e.autoClose && n.close({
      delay: 3e3
    });
    const a = L(() => ({
      info: "info-circle",
      success: "check-circle",
      warning: "exclamation-triangle",
      danger: "x-circle"
    })[e.state]), r = () => c(_n, {
      type: "solid",
      icon: a.value,
      state: e.state,
      description: e.content,
      closable: !0
    }, null);
    return () => c(Oe, {
      "enter-active-class": R("slideInDown"),
      "leave-active-class": R("slideOutUp"),
      appear: !0
    }, {
      default: () => {
        var l;
        return [n.state.value ? ((l = t.headless) == null ? void 0 : l.call(t)[0]) ?? r() : null];
      }
    });
  }
});
let $e = null;
const sr = (e) => {
  $e || ($e = document.createElement("div"), $e.className = "pl-message-container", document.body.appendChild($e));
  const t = c(ir, Nt(e) ? {
    ...e
  } : null, qe(e) || Fe(e) ? {
    headless: qe(e) ? e : () => e
  } : null), n = document.createElement("div");
  It(t, n), $e.appendChild(n.firstChild);
}, Rr = sr, ur = {
  placement: {
    type: String,
    default: "bottom"
  },
  trigger: {
    type: String,
    default: "hover"
  },
  data: {
    type: Array,
    default: () => []
  }
}, cr = /* @__PURE__ */ E({
  name: "Dropdown",
  props: ur,
  setup(e, {
    slots: t
  }) {
    const n = (o) => (s) => {
      o.callback && o.callback(), o.children || (s.stopPropagation(), document.documentElement.click());
    }, a = (o) => c(A, ot({
      type: "ghost",
      state: "info",
      disabled: o.disabled,
      onClick: n(o)
    }, o.button), {
      default: () => {
        var s;
        return [c("div", {
          class: "pl-dropdown-button"
        }, [o.name, ((s = o.button) == null ? void 0 : s.badge) && c(jn, o.button.badge, null)])];
      }
    }), r = (o) => c(X, null, [o.title && c("div", {
      class: "pl-dropdown-title"
    }, [o.title]), a(o), o.divider && c("div", {
      class: "pl-dropdown-divider"
    }, null)]), l = () => c("div", {
      class: "pl-dropdown-menu"
    }, [e.data.map((o) => o.children ? c(dr, {
      class: "pl-dropdown-child",
      data: o.children,
      trigger: e.trigger,
      placement: "right"
    }, {
      reference: a(o)
    }) : r(o))]);
    return () => c(cn, e, {
      reference: t.reference,
      headless: t.headless || l
    });
  }
}), dr = T(cr), fr = {
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
}, pr = /* @__PURE__ */ E({
  name: "Scrollbar",
  props: fr,
  emits: ["scroll"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    let a = 0, r = 0;
    const l = k(0), o = k(0), s = k(0), i = k(0), u = k(!1), f = k(!1), m = k(!1), d = k(), y = k(), h = k();
    Ge({
      scrollto(w) {
        var b;
        (b = d.value) == null || b.scrollTo(w);
      }
    });
    const p = () => {
      d != null && d.value && (i.value = Math.max(d.value.clientHeight ** 2 / d.value.scrollHeight, e.minThumbSize), s.value = Math.max(d.value.clientWidth ** 2 / d.value.scrollWidth, e.minThumbSize));
    }, v = () => {
      var w;
      (w = d.value) == null || w.scrollTo({
        left: d.value.scrollWidth * (l.value / d.value.clientWidth),
        behavior: e.behavior
      });
    }, g = () => {
      var w;
      (w = d.value) == null || w.scrollTo({
        top: d.value.scrollHeight * (o.value / d.value.clientHeight),
        behavior: e.behavior
      });
    };
    Ce(() => {
      d != null && d.value && (m.value = d.value.clientHeight < d.value.scrollHeight, f.value = d.value.clientWidth < d.value.scrollWidth, p());
    });
    const x = (w) => (b) => {
      if (!d.value)
        return;
      let $ = 0, _ = 0;
      const j = b.target !== y.value && b.target !== h.value;
      if (w ? (_ = o.value, $ = b.screenY) : (_ = l.value, $ = b.screenX), j)
        return w ? (o.value = b.offsetY - i.value / 2, g()) : (l.value = b.offsetX - s.value / 2, v());
      const B = (le) => {
        if (!d.value)
          return;
        const ie = w ? le.screenY : le.screenX;
        return w ? (o.value = Math.max(Math.min(_ + ie - $, d.value.clientHeight - i.value), 0), g()) : (l.value = Math.max(Math.min(_ + ie - $, d.value.clientWidth - s.value), 0), v());
      }, I = document.onselectstart, W = () => {
        document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", W), document.onselectstart = I;
      };
      document.addEventListener("mousemove", B), document.addEventListener("mouseup", W), document.onselectstart = () => !1;
    }, S = (w) => {
      const b = w.target;
      a !== b.scrollTop && (o.value = b.scrollTop * b.clientHeight / b.scrollHeight, a = b.scrollTop), r !== b.scrollLeft && (l.value = b.scrollLeft * b.clientWidth / b.scrollWidth, r = b.scrollLeft), p(), n("scroll", w);
    }, O = () => {
      u.value = !0;
    }, C = () => {
      u.value = !1;
    };
    return () => {
      var w;
      return c("div", {
        class: "pl-scrollbar",
        style: `height: ${e.height}px`,
        onMouseenter: O,
        onMouseleave: C
      }, [c("div", {
        ref: d,
        class: "pl-scrollbar-wrpper",
        onScroll: S
      }, [(w = t.default) == null ? void 0 : w.call(t)]), c("div", {
        class: "pl-scrollbar-bar pl-scrollbar-bar--x",
        onMousedown: x(!1)
      }, [q(c("div", {
        ref: y,
        class: "pl-scrollbar-bar-thumb pl-scrollbar-bar-thumb--x",
        style: `width: ${s.value}px; transform: translateX(${l.value}px)`
      }, null), [[Y, u.value && f.value]])]), c("div", {
        class: "pl-scrollbar-bar pl-scrollbar-bar--y",
        onMousedown: x(!0)
      }, [q(c("div", {
        ref: h,
        class: "pl-scrollbar-bar-thumb pl-scrollbar-bar-thumb--y",
        style: `height: ${i.value}px; transform: translateY(${o.value}px)`
      }, null), [[Y, u.value && m.value]])])]);
    };
  }
}), vr = T(pr), mr = /* @__PURE__ */ E({
  setup() {
    const {
      currentPaneId: e,
      headers: t,
      position: n
    } = rt(ht), a = k(), r = k(), l = L(() => {
      if (!r.value)
        return;
      if (n.value === "top") {
        const f = `${r.value[e.value].clientWidth}px`, m = `translateX(${r.value[e.value].offsetLeft}px)`;
        return {
          width: f,
          transform: m
        };
      }
      const i = `${r.value[e.value].clientHeight}px`, u = `translateY(${r.value[e.value].offsetTop}px)`;
      return {
        height: i,
        transform: u
      };
    });
    je(() => {
      kn(() => {
        r.value = Array.from(a.value.children);
      });
    });
    const o = (i) => () => e.value = i, s = (i) => c(A, ot(i, {
      type: "link",
      state: e.value === i.id ? "primary" : "info",
      onClick: o(i.id)
    }), {
      default: () => [i.name]
    });
    return () => c("div", {
      class: ["pl-tabs-header", n.value]
    }, [c("div", {
      ref: a,
      class: ["pl-tabs-button", n.value]
    }, [t.value.map((i) => s(i))]), c("div", {
      class: ["pl-tabs-slideway", n.value]
    }, [c("div", {
      class: "pl-tabs-thumb",
      style: l.value
    }, null)])]);
  }
}), ht = Symbol("pl-tabs"), hr = {
  defaultTab: String,
  position: String
}, gr = /* @__PURE__ */ E({
  name: "Tabs",
  props: hr,
  setup(e, {
    slots: t
  }) {
    var l;
    const n = k(0), a = k(0), r = k([]);
    return (l = t.default) != null && l.call(t) || console.log("Warn: Tabs missing default slot."), Mt(ht, {
      headers: r,
      paneId: n,
      currentPaneId: a,
      position: L(() => e.position || "top")
    }), () => {
      var o;
      return c("div", {
        class: ["pl-tabs", `${e.position}`]
      }, [c(mr, null, null), (o = t.default) == null ? void 0 : o.call(t)]);
    };
  }
}), yr = Object.assign({
  name: String
}, Xt), br = /* @__PURE__ */ E({
  name: "TabPane",
  props: yr,
  setup(e, {
    slots: t
  }) {
    const {
      paneId: n,
      currentPaneId: a,
      headers: r
    } = rt(ht), l = n.value++;
    return r.value.push({
      id: l,
      ...e
    }), () => {
      var o;
      return q(c("div", null, [(o = t.default) == null ? void 0 : o.call(t)]), [[Y, a.value === l]]);
    };
  }
}), wr = T(gr), xr = T(br);
wr.PlTabPane = xr;
const kr = /* @__PURE__ */ E({
  name: "Steps",
  props: {
    modelValue: {
      type: Array,
      require: !0
    },
    vertical: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const {
      steps: n,
      current: a,
      toggle: r
    } = Kt(e.modelValue, t);
    return Ge({
      current: a,
      toggle: (o, s) => {
        n.value[o] = Object.assign(n.value[o], s), n.value[o].state !== "pending" && (n.value[o - 1].state = "done", n.value[o - 1].result = "success"), (n.value[o].result === "success" || !n.value[o].result) && (n.value[o + 1].state = "processing"), r(o);
      }
    }), () => {
      var o;
      return c("div", {
        class: ["pl-steps", e.vertical && "__vertical"]
      }, [(o = n.value) == null ? void 0 : o.map((s, i) => {
        var u;
        return c(X, null, [c("div", {
          class: ["pl-steps-item", e.vertical && "__vertical"]
        }, [c(A, {
          type: s.state === "processing" ? "outline" : s.state === "done" ? "solid" : "white",
          state: s.state === "done" ? s.result === "exception" ? "warning" : s.result === "fail" ? "danger" : "success" : "primary",
          size: "small",
          shape: "circle"
        }, {
          default: () => [s.icon ? c(lt, {
            name: s.icon
          }, null) : i + 1]
        }), c("div", {
          class: ["pl-steps-content", e.vertical && "__vertical"]
        }, [c("div", {
          class: "pl-steps-item-name"
        }, [s.name]), c("div", {
          class: "pl-steps-item-description"
        }, [s.description])])]), i + 1 !== ((u = n.value) == null ? void 0 : u.length) && c("div", {
          class: ["pl-steps-item-pipe", e.vertical && "__vertical"]
        }, null)]);
      })]);
    };
  }
}), zr = T(kr);
function Or(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Fe(e);
}
const Cr = /* @__PURE__ */ E({
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
  setup(e) {
    const t = L(() => Rt(2, e.count - 1, 1)), n = L(() => t.value.length + 2), {
      count: a,
      add: r,
      sub: l,
      update: o
    } = Gt({
      initial: 1,
      min: 1,
      max: n
    });
    Ge({
      current: a,
      next: r,
      prev: l,
      toggle: o
    });
    const s = k(0), i = k(e.showCount - 3), u = L(() => a.value * 2 - 1 > e.showCount), f = L(() => (e.count - a.value) * 2 - 1 >= e.showCount), m = () => l(), d = () => r(), y = () => l(i.value - s.value - 1), h = () => r(i.value - s.value), p = (g) => () => a.value = g, v = (g) => {
      o(parseInt(g.target.value));
    };
    return Ce(() => {
      if (u.value && f.value) {
        const g = t.value.findIndex((S) => S === a.value), x = (e.showCount - 3) / 2;
        s.value = g - x, i.value = g + x + 1;
      } else
        u.value ? (s.value = t.value.length - e.showCount + 1, i.value = t.value.length) : f.value && (s.value = 0, i.value = e.showCount - 2);
    }), () => {
      var g;
      return q(c("div", null, [c(A, {
        size: "mini",
        state: "info",
        iconLeft: "chevron-left",
        type: e.type,
        shape: e.shape,
        onClick: m
      }, null), c(A, {
        size: "mini",
        type: e.type,
        shape: e.shape,
        state: a.value === 1 ? "primary" : "info",
        onClick: p(1)
      }, {
        default: () => [tt("1")]
      }), q(c(A, {
        size: "mini",
        state: "info",
        iconLeft: "three-dots",
        type: e.type,
        shape: e.shape,
        onClick: y
      }, null), [[Y, u.value]]), (g = t.value) == null ? void 0 : g.slice(s.value, i.value).map((x) => c(A, {
        size: "mini",
        type: e.type,
        shape: e.shape,
        state: a.value === x ? "primary" : "info",
        onClick: p(x)
      }, Or(x) ? x : {
        default: () => [x]
      })), q(c(A, {
        size: "mini",
        state: "info",
        iconLeft: "three-dots",
        type: e.type,
        shape: e.shape,
        onClick: h
      }, null), [[Y, f.value]]), c(A, {
        size: "mini",
        type: e.type,
        shape: e.shape,
        state: a.value === e.count ? "primary" : "info",
        onClick: p(e.count)
      }, {
        default: () => [e.count]
      }), c(A, {
        size: "mini",
        state: "info",
        iconLeft: "chevron-right",
        type: e.type,
        shape: e.shape,
        onClick: d
      }, null), tt("to "), c("input", {
        type: "number",
        onBlur: v
      }, null)]), [[Y, e.count > 1]]);
    };
  }
}), Xr = T(Cr), Sr = /* @__PURE__ */ E({
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
  setup(e, {
    emit: t
  }) {
    const {
      steps: n,
      current: a,
      toggle: r
    } = Kt(e.modelValue, t), l = Dt(), o = l == null ? void 0 : l.appContext.config.globalProperties.$router, s = (i, u) => () => {
      r(i), !(!u.to || !o) && (e.replace ? o.replace(u.to) : o.push(u.to));
    };
    return () => {
      var i;
      return c(X, null, [(i = n.value) == null ? void 0 : i.map((u, f) => c(X, null, [q(c("span", null, [e.separator]), [[Y, f !== 0]]), c(A, {
        size: "mini",
        type: "link",
        iconLeft: u.icon,
        state: a.value === f ? "primary" : "info",
        onClick: s(f, u)
      }, {
        default: () => [u.name]
      })]))]);
    };
  }
}), qr = T(Sr);
function Pr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Fe(e);
}
const Er = {
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
    required: !0
  }
}, $r = /* @__PURE__ */ E({
  name: "VirtualList",
  props: Er,
  setup(e, {
    slots: t
  }) {
    const n = k(0), a = k(0), r = k(0), l = k(0), o = k(0), s = k(), i = L(() => Rt(1, e.listItemCount, 1).map((p, v) => ({
      index: v,
      height: e.estimatedListItemHeight,
      top: e.estimatedListItemHeight * v,
      bottom: e.estimatedListItemHeight * (v + 1)
    }))), u = () => {
      l.value = n.value >= 1 ? i.value[n.value - 1].bottom : 0;
    }, f = (p = 0) => {
      var v;
      return (v = i.value.find((g) => g.bottom > p)) == null ? void 0 : v.index;
    }, m = L(() => ({
      height: `${o.value}px`
    })), d = L(() => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${l.value}px)`
    }));
    Ce(() => {
      o.value = e.estimatedListItemHeight * e.listItemCount;
    }), je(() => {
      s.value && (r.value = a.value = Math.ceil(e.listHeight / e.estimatedListItemHeight));
    }), On(() => {
      document.querySelectorAll(".pl-virtual-list-item").forEach((v, g) => {
        const x = v.getBoundingClientRect(), S = x.height, O = i.value[g].height - S;
        if (O) {
          i.value[g].height = S, i.value[g].bottom = x.bottom - O;
          for (let C = g + 1; C < i.value.length; C++)
            i.value[C].top = i.value[C - 1].bottom, i.value[C].bottom = i.value[C].bottom - O;
        }
      }), o.value = i.value[i.value.length - 1].bottom, u();
    });
    const y = (p) => {
      const v = p.target.scrollTop;
      n.value = f(v), a.value = n.value + r.value, u();
    }, h = () => {
      var p, v;
      return c(X, null, [c("div", {
        style: m.value
      }, null), c("div", {
        style: d.value
      }, [(v = (p = t.default) == null ? void 0 : p.call(t)[0].children) == null ? void 0 : v.slice(n.value, a.value)])]);
    };
    return () => {
      let p;
      return c(vr, {
        ref: s,
        height: e.listHeight,
        onScroll: y
      }, Pr(p = h()) ? p : {
        default: () => [p]
      });
    };
  }
}), Tr = /* @__PURE__ */ E({
  name: "VirtualListItem",
  setup(e, {
    slots: t
  }) {
    return () => {
      var n;
      return c("div", {
        class: "pl-virtual-list-item"
      }, [(n = t.default) == null ? void 0 : n.call(t)]);
    };
  }
}), Br = T($r), _r = T(Tr);
Br.PlVirtualListItem = _r;
export {
  zt as GROUP_BUTTON_KEY,
  ir as MessageConstructor,
  rr as NotificationConstructor,
  ht as PL_TAB_KEY,
  _n as PlAlert,
  jn as PlBadge,
  qr as PlBreadcrumb,
  A as PlButton,
  jr as PlButtonGroup,
  Vr as PlDrawer,
  dr as PlDropdown,
  lt as PlIcon,
  Ar as PlInput,
  Rr as PlMessage,
  Dr as PlModal,
  Nr as PlNotification,
  Xr as PlPagination,
  cn as PlPopover,
  vr as PlScrollbar,
  zr as PlSteps,
  xr as PlTabPane,
  Mr as PlTable,
  wr as PlTabs,
  Wr as PlTag,
  Ir as PlTooltip,
  Br as PlVirtualList,
  _r as PlVirtualListItem,
  Xt as buttonProps
};
