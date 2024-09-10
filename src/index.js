import { defineCustomElement } from 'vue';
import TextField from './components/TextField.vue';
import Button from './components/Button.vue';

// Define the custom element
const TextFieldElement = defineCustomElement(TextField);
customElements.define('text-field', TextFieldElement);

// const ButtonElement = defineCustomElement(Button);
// customElements.define('my-button', ButtonElement);
