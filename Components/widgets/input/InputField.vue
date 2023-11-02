<script setup lang="ts">

import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  label: String,
  type: String,
  value: String,
  placeholder: String,
  error: String,  
});

const valueRef = ref(props.value);

watch(() => props.value, newVal => {
  valueRef.value = newVal;
}, { immediate: true });

</script>

<template>
  <div class="position-relative">
    <input class="form-control floatingInput" :type="props.type" v-model="valueRef" :placeholder="props.placeholder" />
    <label class="floatingLabel">{{ props.label }}</label>
    <p v-if="props.error" class="error-text">{{ props.error }}</p>
  </div>
</template>

<style scoped></style>