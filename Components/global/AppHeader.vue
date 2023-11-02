<script setup lang="ts"></script>

<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <NuxtLink to="#"><NuxtImg src="~/assets/images/logo.png" alt="logo"/></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
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