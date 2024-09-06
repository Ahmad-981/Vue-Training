// src/main.js
import { defineCustomElement } from 'vue';
import MyComponent from './components/MyComponent.vue';

// Create a custom element from the Vue component
const MyVueComponent = defineCustomElement(MyComponent);

customElements.define('my-vue-component', MyVueComponent);
