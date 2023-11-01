<script setup>
  import Navbar from '../Components/global/Navbar.vue';
  import Foot from '../Components/global/BaseFooter.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <slot></slot> 
  <footer>
    <Foot/>
  </footer>
</template>

 
