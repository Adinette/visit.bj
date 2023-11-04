<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand">
          <nuxt-img src="logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mr-3">
              <a class="nav-link" href="/destination.html"
                >Découvrir le Bénin</a
              >
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="/history.html">Nos histoires</a>
            </li>
          </ul>
          <div>
            <a class="btn btn-outline-primary mr-3" href="#">Se connecter</a>
            <a class="btn btn-primary" href="#">S'inscrire</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup></script>
