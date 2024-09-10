<template>
  <form @submit.prevent="handleSubmit">
    <text-field
      placeholder="Enter your email"
      type="email"
      required
      @change="handleInputChange"
      @click="handleClick"
    />

    <text-field
      placeholder="Enter username"
      type="text"
      required
      @change="handleInputChange"
      @click="handleClick"
    />
    <TextField
      placeholder="Enter username"
      type="text"
      required
      @change="handleInputChange"
      @click="handleClick"
    />



    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </form>
</template>


<script setup>
import { ref } from 'vue';
// import TextField from './components/TextField.vue';
// import MyComponent from './components/MyComponent.vue';
// import SubmitButton from './components/SubmitButton.vue';


const inputValue = ref('');

function handleInputChange(value) {
  inputValue.value = value;
  console.log('Input value changed:', value);
}

function handleClick() {
  console.log('Input clicked');
}

function handleSubmit() {
  console.log('Form submitted with value:', inputValue.value);
}
</script>


<style scoped>
@import './assets/styles/tailwind.css';
</style>
