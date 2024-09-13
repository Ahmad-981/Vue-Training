(function (e, i) {
  typeof exports == "object" && typeof module < "u"
    ? i(require("vue"))
    : typeof define == "function" && define.amd
    ? define(["vue"], i)
    : ((e = typeof globalThis < "u" ? globalThis : e || self), i(e.Vue));
})(this, function (e) {
  "use strict";
  const i = (r, o) => {
      const l = r.__vccOpts || r;
      for (const [d, a] of o) l[d] = a;
      return l;
    },
    c = {},
    p = { class: "flex justify-center items-center h-full bg-gray-100" };
  function f(r, o) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "div",
        p,
        o[0] ||
          (o[0] = [
            e.createStaticVNode(
              '<div class="bg-red-400 shadow-lg rounded-lg max-w-sm overflow-hidden"><img class="w-full h-60 object-fill" src="https://recipe52.com/wp-content/uploads/2018/07/Pakistani-Biryani-blog-1-of-1-edited-1-500x375.jpg" alt="Food Image"><div class="p-10"><h2 class="text-xl font-bold text-white mb-7 text-center">Delicious Pizza</h2><div class="flex justify-between items-center mb-4"><span class="text-white font-semibold">Quantity:</span><span class="text-white">2</span></div><div class="flex justify-between items-center mb-4"><span class="text-white font-semibold">Price:</span><span class="text-white font-semibold">$15.99</span></div><p class="text-white text-md mb-4"> This delicious pizza is topped with fresh mozzarella, basil, and tomatoes. </p><div class="text-center mt-10"><button class="bg-white text-red-400 font-semibold px-4 py-2 rounded hover:bg-blue-700"> Add to Cart </button></div></div></div>',
              1
            ),
          ])
      )
    );
  }
  const u = i(c, [["render", f]]),
    x = { style: { display: "flex", "justify-content": "center" } },
    h = { style: { "margin-bottom": "12px" } },
    b = ["value"],
    y = { style: { "margin-bottom": "12px" } },
    g = ["value"],
    w = { style: { "margin-bottom": "12px" } },
    E = ["value"],
    _ = { style: { "margin-bottom": "12px" } },
    v = ["value"],
    V = {
      __name: "FormComponent.ce",
      setup(r) {
        const o = e.ref(""),
          l = e.ref(""),
          d = e.ref(""),
          a = e.ref(""),
          m = (s, t) => {
            const n = t.detail;
            s === "username" && (o.value = n),
              s === "email" && (l.value = n),
              s === "password" && (d.value = n),
              s === "address" && (a.value = n);
          },
          j = () => {
            const s = {
              username: o.value,
              email: l.value,
              password: d.value,
              address: a.value,
            };
            console.log("Form submitted with:", s);
          };
        return (s, t) => (
          e.openBlock(),
          e.createElementBlock(
            e.Fragment,
            null,
            [
              t[5] ||
                (t[5] = e.createElementVNode(
                  "div",
                  null,
                  [
                    e.createElementVNode(
                      "h1",
                      {
                        style: {
                          display: "flex",
                          "justify-content": "center",
                          padding: "20px",
                          "font-weight": "600",
                          color: "white",
                          "background-color": "#f87171",
                        },
                      },
                      " Signup Form (Web component) "
                    ),
                  ],
                  -1
                )),
              e.createElementVNode("div", x, [
                e.createElementVNode(
                  "form",
                  {
                    onSubmit: e.withModifiers(j, ["prevent"]),
                    style: {
                      "justify-content": "center",
                      "margin-top": "20px",
                    },
                  },
                  [
                    e.createElementVNode("div", h, [
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter username",
                          type: "text",
                          value: o.value,
                          onChange: t[0] || (t[0] = (n) => m("username", n)),
                          required: "",
                        },
                        null,
                        40,
                        b
                      ),
                    ]),
                    e.createElementVNode("div", y, [
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter email",
                          type: "email",
                          value: l.value,
                          onChange: t[1] || (t[1] = (n) => m("email", n)),
                          required: "",
                        },
                        null,
                        40,
                        g
                      ),
                    ]),
                    e.createElementVNode("div", w, [
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter password",
                          type: "password",
                          value: d.value,
                          onChange: t[2] || (t[2] = (n) => m("password", n)),
                          required: "",
                        },
                        null,
                        40,
                        E
                      ),
                    ]),
                    e.createElementVNode("div", _, [
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter address",
                          type: "text",
                          value: a.value,
                          onChange: t[3] || (t[3] = (n) => m("address", n)),
                          required: "",
                        },
                        null,
                        40,
                        v
                      ),
                    ]),
                    t[4] ||
                      (t[4] = e.createElementVNode(
                        "div",
                        {
                          style: {
                            display: "flex",
                            "justify-content": "center",
                            padding: "8px",
                            "border-radius": "12px",
                          },
                        },
                        [e.createElementVNode("my-button", null, "Submit")],
                        -1
                      )),
                  ],
                  32
                ),
              ]),
            ],
            64
          )
        );
      },
    },
    N = e.defineCustomElement(u);
  customElements.define("my-vue-component", N);
  const C = e.defineCustomElement(V);
  customElements.define("form-component", C);
});
