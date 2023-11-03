<script setup lang="ts"></script>

<template>
  <div class="orLogin">
    <div class="d-flex align-items-center justify-content-center mb-3">
      <hr class="line">
      <p class="mb-0 mx-3">Ou se connecter avec</p>
      <hr class="line">
    </div>
    <div>
      <button class="mr-2"><img src="~/assets/images/facebook.png" alt="facebok"/></button>
      <button><img src="~/assets/images/google.png" alt="google"/></button>
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