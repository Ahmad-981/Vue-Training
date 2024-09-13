<script setup>

import { ref } from 'vue';
// import TextField from './components/TextField.ce.vue';
// import SubmitButton from './components/Button.vue';
// import MyComponent from './components/MyComponent.ce.vue';
import FormComponent from './components/FormComponent.ce.vue';

const inputValue = ref('');

function handleInputChange(value) {
  inputValue.value = value.detail[0];
  console.log('Input value changed:', inputValue.value);
}

function handleSubmit() {
  console.log('Form submitted with value:', inputValue.value);
}
</script>



<template>
  <div class="flex justify-center items-center h-full bg-red-400">
    <h1 class = "flex justify-center p-5 font-semibold text-white  ">Signup form</h1>
  </div>
  <div class="flex justify-center mt-5">
    <form @submit.prevent="handleSubmit">
      <div class=" mb-3">
        <text-field placeholder="Enter username" type="text" required @change="handleInputChange"
        @click="handleClick" />
      </div>
      <div class=" mb-3">
        <text-field placeholder="Enter email" type="email" required @change="handleInputChange"
        @click="handleClick" />
      </div>

      <div class=" mb-3">
      <text-field placeholder="Enter password" type="password" required @change="handleInputChange"
        @click="handleClick" /> </div>
      <TextField placeholder="Enter address" type="text" required @change="handleInputChange" @click="handleClick" />


      <br />
      <div class=" flex justify-center p-2 rounded-xl">
        <my-button>Submit</my-button>
      </div>
      
      <!-- <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button> -->
    </form>
  </div>

  <div>
    <!-- <FormComponent/> -->
    <form-component />
  </div>

  <div class=" flex mt-20 justify-center">
    <my-vue-component></my-vue-component>
    <MyComponent />
  </div>
</template>


<style scoped>
@import './assets/styles/tailwind.css';
</style>
