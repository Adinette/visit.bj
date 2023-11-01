<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" v-model="value" @input="onInput" @blur="validate" />
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: ['type', 'label', 'id', 'validator'],
  emits: ['update:modelValue'],
  data() {
    return {
      value: '',
      error: null
    };
  },
  methods: {
    onInput() {
      this.error = null;
      this.$emit('update:modelValue', this.value);
    },
    validate() {
      if (this.validator) {
        const error = this.validator(this.value);
        this.error = error;
      }
    }
  }
};
</script>

<style scoped>
.error-text {
  color: red;
}
</style>

