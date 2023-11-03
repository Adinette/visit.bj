<script setup lang="ts">
  import Hamburger from '~/Components/widgets/icon/Hamburger.vue';
</script>

  
<template>
  
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <NuxtLink to="#"><img src="~/assets/images/logo.png" alt="logo"/></NuxtLink>
        <Hamburger/>
        <div class="navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><NuxtLink class="nav-link" to="/">Découvrir le Bénin</NuxtLink></li>
            <li class="nav-item "><NuxtLink class="nav-link" to="#">Nos histoires</NuxtLink></li>
          </ul>
          <div class="join">
            <NuxtLink class="btn btn-secondary" to="/auth/login">Se connecter</NuxtLink>
            <NuxtLink class="btn btn-primary" to="/auth/signup">S'inscrire</NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
</template>

 
<style scoped></style>