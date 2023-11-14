<template>
  <DefaultLayout> 
    <div class="profil-page">
    <nuxt-img 
    src="fond-profil.png" 
    alt="fond-profil" 
    class="image-content rounded-0"/>
    <div class="container">
      <div class=" row justify-content-center">
        <div class="col-lg-9 profil-form px-8 py-10 px-lg-20 py-lg-10">
          <h1>Profil</h1>
          <nuxt-img src="articlehistory2.png" alt="img-profile" class="profil2 mb-4 mt-2"/>
          <form action="">
            <div class="position-relative mb-3">
              <input class="floating-input form-control" type="email" id="email" placeholder="Nom" required>
              <label class="floating-label">Nom</label>
            </div>
            <div class="position-relative mb-3">
              <input class="floating-input form-control" type="email" id="email" placeholder="Prénom" required>
              <label class="floating-label">Prénom</label>
            </div>
            <div class="position-relative mb-3">
              <input class="floating-input form-control" type="email" id="email" placeholder="maxjohnson@gmail.com"
                required>
              <label class="floating-label">E-mail</label>
            </div>
            <div class="position-relative mb-3">
              <input class="floating-input form-control" type="email" id="email" placeholder="******************"
                required>
              <label class="floating-label">Mot de passe</label>
            </div>
            <div class=" clearfix">
              <a href="#" class="btn btn-outline-primary float-md-start px-lg-4">Modifier photo de profil </a>
              <a href="#" class="btn btn-primary float-md-end px-lg-4">Modifier profil </a>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/default.vue";
</script>

<style lang="scss" scoped></style>
