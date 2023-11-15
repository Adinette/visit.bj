<template>
  <Auth title="Se connecter">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3">
        <InputField
          type="email"
          label="E-mail"
          v-model="login.email"
          placeholder="E-mail"
        />
      </div>
      <div class="mb-3">
        <InputField
          type="password"
          label="Mot de passe"
          v-model="login.password"
          placeholder="Mot de passe"
        />
      </div>
      <div class="text-end mb-3">
        <NuxtLink to="/auth/reset-password">Mot de pase oublié?</NuxtLink>
      </div>
      <div class="mb-3"><button class="btn btn-primary w-100 p-3">Se connecter</button></div>
      <Social />
      <div class="text-center">
        <p class="mb-0">
          Vous n'avez pas de compte ?
          <NuxtLink to="/auth/signup">S'inscrire</NuxtLink>
        </p>
      </div>
    </form>
  </Auth>

  <!-- <div class="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="blog p-3 p-md-5">
            <div class="text-center mb-4"><img src="images/logo.png" alt="logo"></div>
            <div>
              <h2 class="text-black">Se connecter</h2>
              <p>Découvrez le Bénin à travers nos offres de voyage.</p>
            </div>
            <form class="py-3 mb-4" action="..." method="post">
              <div class="position-relative mb-3">
                <input class="floating-input form-control" type="email" id="email" placeholder="E-mail" required>
                <label class="floating-label">E-mail</label>
              </div>
              <div class="position-relative mb-3">
                <input class="floating-input form-control" type="password" id="password" placeholder="Mot de passe" required>
                <label class="floating-label">Mot de passe</label>
              </div>
              <div class="text-end mb-3"><a class="mixe" href="forgetpassword.html">Mot de pase oublié?</a></div>
              <div><button type="submit" class="btn btn-primary w-100 p-3">Se connecter</button></div>
            </form> -->
            <!-- form -->
            <!-- <div class="text-center">
              <div class="d-flex align-items-center justify-content-center mb-3">
                <hr class="line"/>
                <span class="text-black mx-3">Ou se connecter avec</span>
                <hr class="line"/>
              </div>
              <div class="mb-3">
                <a class="mr-2" href="#"><img src="images/logofacebook.png" alt="facebok"></a>
                <a href="#"><img src="images/logogoogle.png" alt="google"></a>
              </div>
              <p class="text-black">Vous n'avez pas de compte ? <a class="mixe" href="register.html">S'inscrire</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->


</template>

<script setup> 
import Social from "@/components/auth/Social.vue";
const login = ref({
  email: "",
  password: "",
});

const feedback = ref("");
</script>
