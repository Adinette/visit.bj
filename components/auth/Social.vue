<template>
  <div class="orLogin">
    <div class="d-flex align-items-center justify-content-center mb-3">
      <hr class="line">
      <p class="mb-0 mx-3">Ou se connecter avec</p>
      <hr class="line">
    </div>
    <div class="text-center">
      <button class="mr-2"> <a class="navbar-brand"> <nuxt-img src="facebook.png" /> </a></button>
      <button><a class="navbar-brand"> <nuxt-img src="google.png" /> </a></button>
    </div>
  </div> 
</template>


<style scoped>
  :root {
    --color-white: #fff;
  }
  button {
    background-color: var(--color-white);
    border: 0;
  }
  img {
    max-width: 2rem;
  }
  p {
    font-size: .75rem;
  }
</style>

<script setup></script>