<script setup>
  import { defineProps } from 'vue'

  const { type, title } = defineProps({
    type: String,
    title: {
      type: String,
      required: true
    },
  })
</script>

<template>
  <button :type="type">{{ title }}</button>
</template>

<style scoped></style>
