<script setup>
import { ref, watch, toRefs } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: "Enter text...",
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(['update:modelValue', 'change', 'click']);

const { modelValue } = toRefs(props);
const inputValue = ref(modelValue.value);

watch(modelValue, (newValue) => {
  inputValue.value = newValue;
});

const handleChange = () => {
  emit('change', inputValue.value);
};

const handleClick = () => {
  emit('click');
};

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <div>
    <input :placeholder="placeholder" :type="type" v-model="inputValue" @change="handleChange" @click="handleClick"
      class="text-field-input" />
  </div>
</template>


<style>
.text-field-input {
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  color: #4a5568;
  width: 100%;
}

.text-field-input:focus {
  outline: none;
  ring: 2px solid #3b82f6;
}
</style>
