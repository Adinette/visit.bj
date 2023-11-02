<script setup lang="ts">
 
 const props = defineProps({
    type: String,
  });

 
</script>

<template>
  <button :type="props.type"> </button>
  
</template>

<style scoped></style>
