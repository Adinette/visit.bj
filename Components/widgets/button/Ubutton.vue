<script setup lang="ts">
   const props = defineProps({
    title: {
      type: String,
      default: 'Envoyer'
    }
  })
  
</script>

<template>
  <button  type="submit" class="btn btn-primary">{{ title }}</button>
</template>

<style scoped>

  button {
    padding: 1.125rem 1rem;
    width: 100%;
  }
</style>