(function (t, e) {
  typeof exports == "object" && typeof module < "u"
    ? e(require("vue"))
    : typeof define == "function" && define.amd
    ? define(["vue"], e)
    : ((t = typeof globalThis < "u" ? globalThis : t || self), e(t.Vue));
})(this, function (t) {
  "use strict";
  const e = (n, o) => {
      const i = n.__vccOpts || n;
      for (const [a, s] of o) i[a] = s;
      return i;
    },
    r = { name: "MyComponent" },
    d = {
      style: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
        "background-color": "#f7fafc",
      },
    };
  function f(n, o, i, a, s, m) {
    return (
      t.openBlock(),
      t.createElementBlock(
        "div",
        d,
        o[0] ||
          (o[0] = [
            t.createStaticVNode(
              '<div style="background-color:#fc8181;box-shadow:0 10px 15px rgba(0, 0, 0, 0.1);border-radius:0.5rem;max-width:24rem;overflow:hidden;" data-v-f555f251><img style="width:100%;height:15rem;object-fit:cover;" src="https://recipe52.com/wp-content/uploads/2018/07/Pakistani-Biryani-blog-1-of-1-edited-1-500x375.jpg" alt="Food Image" data-v-f555f251><div style="padding:2.5rem;" data-v-f555f251><h2 style="font-size:1.25rem;font-weight:bold;color:white;margin-bottom:1.75rem;text-align:center;" data-v-f555f251>Delicious Pizza</h2><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;" data-v-f555f251><span style="color:white;font-weight:600;" data-v-f555f251>Quantity:</span><span style="color:white;" data-v-f555f251>2</span></div><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;" data-v-f555f251><span style="color:white;font-weight:600;" data-v-f555f251>Price:</span><span style="color:white;font-weight:600;" data-v-f555f251>$15.99</span></div><p style="color:white;font-size:1rem;margin-bottom:1rem;" data-v-f555f251> This delicious pizza is topped with fresh mozzarella, basil, and tomatoes. </p><div style="text-align:center;margin-top:2.5rem;" data-v-f555f251><button style="background-color:white;color:#fc8181;font-weight:600;padding:0.5rem 1rem;border-radius:0.25rem;cursor:pointer;" data-v-f555f251> Add to Cart </button></div></div></div>',
              1
            ),
          ])
      )
    );
  }
  const c = e(r, [
      ["render", f],
      ["__scopeId", "data-v-f555f251"],
    ]),
    l = t.defineCustomElement(c);
  customElements.define("my-vue-component", l);
});
