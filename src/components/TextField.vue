<!-- src/components/TextField.vue -->
<template>
  <div>
    <input
      :placeholder="placeholder"
      :type="type"
      v-model="inputValue"
      class="border rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    placeholder: {
      type: String,
      default: 'Enter text...',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
@import '../assets/styles/tailwind.css';
</style>
