(function (e, t) { 
    typeof exports == "object" && typeof module < "u" ? t(require("vue")) : typeof define == "function" && define.amd ? define(["vue"], t) : (e = typeof globalThis < "u" ? globalThis : e || self, t(e.Vue)) 
})(this, function (e) { 
    "use strict"; 

    const t = (n, s) => { 
        const i = n.__vccOpts || n; 
        for (const [f, m] of s) 
            i[f] = m; 
        return i 
    };

    const o = {},

    // Replace Tailwind classes with inline styles
    c = {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f7fafc"
        }
    };

    function d(n, s) { 
        return e.openBlock(), e.createElementBlock("div", c, s[0] || (s[0] = [
            e.createStaticVNode(`
                <div style="background-color: #fc8181; box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); border-radius: 0.5rem; max-width: 24rem; overflow: hidden;">
                    <img style="width: 100%; height: 15rem; object-fit: cover;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OOPOl_rZsVtwFmnMTGf2_bTIv4t_eSJzlA&amp;s" alt="Food Image">
                    <div style="padding: 2.5rem;">
                        <h2 style="font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 1.75rem; text-align: center;">Delicious Pizza</h2>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="color: white; font-weight: 600;">Quantity:</span>
                            <span style="color: white;">2</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="color: white; font-weight: 600;">Price:</span>
                            <span style="color: white; font-weight: 600;">$15.99</span>
                        </div>
                        <p style="color: white; font-size: 1rem; margin-bottom: 1rem;">This delicious pizza is topped with fresh mozzarella, basil, and tomatoes.</p>
                        <div style="text-align: center; margin-top: 2.5rem;">
                            <button style="background-color: white; color: #fc8181; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `, 1)
        ])) 
    };

    const l = t(o, [["render", d]]), 
        a = e.defineCustomElement(l); 

    customElements.define("my-vue-component", a) 
});
