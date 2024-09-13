
<script setup>
import { ref, watch, toRefs } from 'vue';

// Props
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

// Refs for reactive data
const { modelValue } = toRefs(props);
const inputValue = ref(modelValue.value);

// Watch for prop changes to keep inputValue in sync with the parent
watch(modelValue, (newValue) => {
  inputValue.value = newValue;
});

// Methods
const handleChange = () => {
  emit('change', inputValue.value);
};

const handleClick = () => {
  emit('click');
};

// Emit model updates to keep v-model sync between parent and child
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
