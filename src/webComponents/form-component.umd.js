(function (e, s) {
  typeof exports == "object" && typeof module < "u"
    ? s(require("vue"))
    : typeof define == "function" && define.amd
    ? define(["vue"], s)
    : ((e = typeof globalThis < "u" ? globalThis : e || self), s(e.Vue));
})(this, function (e) {
  "use strict";
  const s = (r, o) => {
      const l = r.__vccOpts || r;
      for (const [i, d] of o) l[i] = d;
      return l;
    },
    m = {},
    c = { class: "flex justify-center items-center h-full bg-gray-100" };
  function p(r, o) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "div",
        c,
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
  const f = s(m, [["render", p]]),
    u =
      ".text-field-input[data-v-2c5bda4d]{border:1px solid #e2e8f0;border-radius:.375rem;padding:.5rem 1rem;color:#4a5568;width:100%}.text-field-input[data-v-2c5bda4d]:focus{outline:none;ring:2px solid #3b82f6}",
    x = { style: { "margin-bottom": "12px" } },
    b = { style: { "margin-bottom": "12px" } },
    y = { style: { "margin-bottom": "12px" } },
    h = { style: { "margin-bottom": "12px" } },
    w = s(
      {
        __name: "FormComponent.ce",
        setup(r) {
          const o = e.ref(""),
            l = e.ref(""),
            i = e.ref(""),
            d = e.ref(""),
            _ = () => {
              const a = {
                username: o.value,
                email: l.value,
                password: i.value,
                address: d.value,
              };
              console.log("Form submitted with:", a);
            };
          return (a, t) => (
            e.openBlock(),
            e.createElementBlock("div", null, [
              t[5] ||
                (t[5] = e.createElementVNode(
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
                  " Signup Form ",
                  -1
                )),
              e.createElementVNode(
                "form",
                {
                  onSubmit: e.withModifiers(_, ["prevent"]),
                  style: {
                    display: "flex",
                    "justify-content": "center",
                    "margin-top": "20px",
                  },
                },
                [
                  e.createElementVNode("div", x, [
                    e.withDirectives(
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter username",
                          type: "text",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (n) => (o.value = n)),
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[e.vModelText, o.value]]
                    ),
                  ]),
                  e.createElementVNode("div", b, [
                    e.withDirectives(
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter email",
                          type: "email",
                          "onUpdate:modelValue":
                            t[1] || (t[1] = (n) => (l.value = n)),
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[e.vModelText, l.value]]
                    ),
                  ]),
                  e.createElementVNode("div", y, [
                    e.withDirectives(
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter password",
                          type: "password",
                          "onUpdate:modelValue":
                            t[2] || (t[2] = (n) => (i.value = n)),
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[e.vModelText, i.value]]
                    ),
                  ]),
                  e.createElementVNode("div", h, [
                    e.withDirectives(
                      e.createElementVNode(
                        "text-field",
                        {
                          placeholder: "Enter address",
                          type: "text",
                          "onUpdate:modelValue":
                            t[3] || (t[3] = (n) => (d.value = n)),
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[e.vModelText, d.value]]
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
                      [
                        e.createElementVNode(
                          "my-button",
                          { type: "submit" },
                          "Submit"
                        ),
                      ],
                      -1
                    )),
                ],
                32
              ),
            ])
          );
        },
      },
      [
        ["styles", [u]],
        ["__scopeId", "data-v-2c5bda4d"],
      ]
    ),
    g = e.defineCustomElement(f);
  customElements.define("my-vue-components", g);
  const E = e.defineCustomElement(w);
  customElements.define("form-component", E);
});
