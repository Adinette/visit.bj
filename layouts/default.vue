<script setup>
  import Navbar from '../Components/global/Navbar.vue';
  import baseFooter from '~/Components/global/BaseFooter.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <slot></slot> 
  <footer>
    <baseFooter/>
  </footer>
</template>

<style scoped></style>