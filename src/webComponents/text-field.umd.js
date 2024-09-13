(function (e, n) {
  typeof exports == "object" && typeof module < "u"
    ? n(require("vue"))
    : typeof define == "function" && define.amd
    ? define(["vue"], n)
    : ((e = typeof globalThis < "u" ? globalThis : e || self), n(e.Vue));
})(this, function (e) {
  "use strict";
  const n =
      ".text-field-input{border:1px solid #e2e8f0;border-radius:.375rem;padding:.5rem 1rem;color:#4a5568;width:100%}.text-field-input:focus{outline:none;ring:2px solid #3b82f6}",
    r = (l, t) => {
      const i = l.__vccOpts || l;
      for (const [u, o] of t) i[u] = o;
      return i;
    },
    a = {
      name: "TextField",
      props: {
        placeholder: { type: String, default: "Enter text..." },
        type: { type: String, default: "text" },
        value: { type: String, default: "" },
      },
      data() {
        return { inputValue: this.value };
      },
      methods: {
        handleChange() {
          console.log("hello"), this.$emit("change", this.inputValue);
        },
        handleClick() {
          this.$emit("click");
        },
      },
      watch: {
        inputValue(l) {
          this.$emit("input", l);
        },
      },
    },
    p = ["placeholder", "type"];
  function c(l, t, i, u, o, s) {
    return (
      e.openBlock(),
      e.createElementBlock("div", null, [
        e.withDirectives(
          e.createElementVNode(
            "input",
            {
              placeholder: i.placeholder,
              type: i.type,
              "onUpdate:modelValue": t[0] || (t[0] = (d) => (o.inputValue = d)),
              onChange:
                t[1] ||
                (t[1] = (...d) => s.handleChange && s.handleChange(...d)),
              onClick:
                t[2] || (t[2] = (...d) => s.handleClick && s.handleClick(...d)),
              class: "text-field-input",
            },
            null,
            40,
            p
          ),
          [[e.vModelDynamic, o.inputValue]]
        ),
      ])
    );
  }
  const f = r(a, [
      ["render", c],
      ["styles", [n]],
    ]),
    h = e.defineCustomElement(f, { shadow: !1 });
  customElements.define("text-field", h);
});
