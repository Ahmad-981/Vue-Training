(function (e, t) {
  typeof exports == "object" && typeof module < "u"
    ? t(require("vue"))
    : typeof define == "function" && define.amd
    ? define(["vue"], t)
    : ((e = typeof globalThis < "u" ? globalThis : e || self), t(e.Vue));
})(this, function (e) {
  "use strict";
  const t = (n, o) => {
      const r = n.__vccOpts || n;
      for (const [d, s] of o) r[d] = s;
      return r;
    },
    i =
      ".btn[data-v-8901ed34]{border:none;border-radius:4px;padding:8px 16px;color:#fff;cursor:pointer}.btn.primary[data-v-8901ed34]{background-color:#d45d85}.btn.secondary[data-v-8901ed34]{background-color:gray}",
    c = {
      name: "Button",
      props: { type: { type: String, default: "primary" } },
    };
  function a(n, o, r, d, s, l) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "button",
        {
          class: e.normalizeClass(["btn", r.type]),
          onClick: o[0] || (o[0] = (p) => n.$emit("click")),
        },
        [e.renderSlot(n.$slots, "default", {}, void 0, !0)],
        2
      )
    );
  }
  const u = t(c, [
      ["render", a],
      ["styles", [i]],
      ["__scopeId", "data-v-8901ed34"],
    ]),
    f = e.defineCustomElement(u);
  customElements.define("my-button", f);
});
