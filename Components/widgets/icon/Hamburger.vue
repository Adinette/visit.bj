<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

  const screenSizes = {
    mobile: 576,
    tablet: 768,
    desktop: 992,
  };

  const debounceDelay = 250;

  const debounceTimer = ref<number>(0);

  function resetHamburger() {
    const hamburgerCheckbox = document.getElementById('menuToggle') as HTMLInputElement | null;
    if (hamburgerCheckbox) {
      hamburgerCheckbox.checked = false;
    }
  }

  function handleResize() {
    clearTimeout(debounceTimer.value);
    debounceTimer.value = window.setTimeout(() => {
     
      if (window.innerWidth > screenSizes.desktop) {
        resetHamburger();
      } else if (window.innerWidth > screenSizes.tablet) {
        resetHamburger(); 
      } 
      else if (window.innerWidth > screenSizes.mobile) {
        resetHamburger();
      }
  }, debounceDelay);
}

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(debounceTimer.value);
  });
</script>


<template>

  <input type="checkbox" id="menuToggle"/> 
  <label id="hamburger" for="menuToggle">
    <span></span>
    <span></span>
    <span></span>
  </label>
  
</template>

 
<style scoped></style>