// src/main.js
import { defineCustomElement } from 'vue';
import MyComponent from './components/MyComponent.vue';

// Create a custom element from the Vue component
const MyVueComponent = defineCustomElement(MyComponent, {shadow: true});

// Define the custom element
customElements.define('my-vue-component', MyVueComponent);
