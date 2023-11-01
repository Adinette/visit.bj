<script setup></script>
<template>
      <div class="container"> 
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html"><img src="images/logo.png"
              alt="logo"></a>
          <div class="navbar-toggler " type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto px-3">
              <li class="nav-item mr-3"><a class="nav-link" href="#">Découvrir
                  le Bénin</a></li>
              <li class="nav-item mr-3"><a class="nav-link" href="#">Nos
                  histoires</a></li>
            </ul>
            <div>
              <router-link to="/login" class="btn btn-outline-primary mr-3" href="#">Se connecter</router-link>
              <router-link to="/signup" class="btn btn-primary" href="#">S'inscrire</router-link>
            </div>
          </div>
        </nav>
      </div>
</template>

<style scoped>
</style>
