<script setup>

  import AppHeader from '~/Components/global/AppHeader.vue';
  import AppFooter from '~/Components/global/AppFooter.vue';
  
 </script>

<template>
  <AppHeader/>
    <slot></slot> 
  <AppFooter/>
</template>

<style scoped></style>