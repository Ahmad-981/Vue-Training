(function (e, t) {
  typeof exports == "object" && typeof module < "u"
    ? t(require("vue"))
    : typeof define == "function" && define.amd
    ? define(["vue"], t)
    : ((e = typeof globalThis < "u" ? globalThis : e || self), t(e.Vue));
})(this, function (e) {
  "use strict";
  const t = (n, o) => {
      const s = n.__vccOpts || n;
      for (const [i, r] of o) s[i] = r;
      return s;
    },
    u = {
      name: "Button",
      props: { type: { type: String, default: "primary" } },
    };
  function d(n, o, s, i, r, l) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "button",
        {
          class: e.normalizeClass(["btn", s.type]),
          onClick: o[0] || (o[0] = (p) => n.$emit("click")),
        },
        [e.renderSlot(n.$slots, "default", {}, void 0, !0)],
        2
      )
    );
  }
  const f = t(u, [
      ["render", d],
      ["__scopeId", "data-v-b7182197"],
    ]),
    c = e.defineCustomElement(f);
  customElements.define("my-button", c);
});
