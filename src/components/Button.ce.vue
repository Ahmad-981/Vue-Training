<!-- src/components/Button.vue -->
<template>
  <button
    :class="['btn', type]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
}

.btn.primary {
  background-color: rgb(212, 93, 133);
}

.btn.secondary {
  background-color: gray;
}
</style>
