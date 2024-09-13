import { defineCustomElement } from "vue";
import TextField from "./components/TextField.ce.vue";
import Button from "./components/Button.ce.vue";
import MyComponentCe from "./components/MyComponent.ce.vue";
import FormComponent from "./components/FormComponent.ce.vue";

// const TextFieldElement = defineCustomElement(TextField, { shadow: false });
// customElements.define("text-field", TextFieldElement);

// const ButtonElement = defineCustomElement(Button);
// customElements.define("my-button", ButtonElement);

const MyComponentElement = defineCustomElement(MyComponentCe);
customElements.define("my-vue-component", MyComponentElement);

const FormElement = defineCustomElement(FormComponent);
customElements.define("form-component", FormElement);
