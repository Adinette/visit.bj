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
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
  }
</style>