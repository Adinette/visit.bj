<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  label: String,
  type: String,
  value: String,
  error: String
});

const valueRef = ref(props.value);

watch(() => {
  valueRef.value = props.value;
});

</script>

<template>
  <div class="position-relative">
    <input class="form-control floatingInput" :type="props.type" :id="props.id" v-model="valueRef" />
    <label class="floatingLabel">{{ props.label }}</label>
    <p v-if="props.error" class="error-text">{{ props.error }}</p>
  </div>
</template>

<style scoped> </style>


