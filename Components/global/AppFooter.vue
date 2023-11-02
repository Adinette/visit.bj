<script setup lang="ts"></script>

<template>
  <footer>
    <div class="socialNetwork">
      <div class="container">
        <div class="mb-3">
          <NuxtLink to="#"
            ><img src="~/assets/images/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <div class="contentIcon">
          <NuxtLink to="#"><i class="bi bi-facebook"></i></NuxtLink>
          <NuxtLink to="#"><i class="bi bi-instagram"></i></NuxtLink>
          <NuxtLink to="#"><i class="bi bi-twitter"></i></NuxtLink>
        </div>
      </div>
    </div>

    <div class="navigationFoot">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-8 mx-auto">
            <ul class="d-flex flex-column flex-md-row justify-content-center">
              <li class="mb-3 mb-md-0">
                <NuxtLink href="#">Accueil</NuxtLink>
              </li>
              <li><NuxtLink to="/">Découvrir le Bénin</NuxtLink></li>
              <li class="my-3 my-md-0">
                <NuxtLink to="#">Nos histoires</NuxtLink>
              </li>
              <li><NuxtLink to="#">Contact</NuxtLink></li>
            </ul>
            <ul
              class="d-flex flex-column flex-md-row justify-content-center mb-0"
            >
              <li><NuxtLink to="#">Conditions d'utilisation</NuxtLink></li>
              <li class="my-3 my-md-0"><NuxtLink to="#">FAQ</NuxtLink></li>
              <li><NuxtLink to="#">Confidentialité</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="container">
        <div>&copy; 2023 <span>visit.bj</span> Tous droits réservés.</div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>