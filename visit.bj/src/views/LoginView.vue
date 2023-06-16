<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../service/login.service";
const email = ref("");
const password = ref("");
const router = useRouter();

const submitForm = async (event) => {
  event.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("ok");
  } else {
    try {
      const auth = await login({
        email: email.value,
        password: password.value,
      });
      console.log(auth);

      if (token) {
        router.push({ name: "dashbord" });
      } else {
        console.log("Mot de passe ou email incorrecte");
      }
      email.value = "";
      password.value = "";
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div class="login">
    <div class="container">
      <div class="row d-flex justify-content-center vh-100">
        <div class="border rounded rounded-4 col-sm-12 col-lg-6 p-5 colorform">
          <div class="text-center mb-4">
            <img src="../assets/image/logo.png" alt="Logo" class="logo-img" />
          </div>
          <div>
            <h1 class="fw-bold">Se connecter</h1>
            <h5 class="fw-light">
              Découvrez le Bénin à travers nos offres de voyage.
            </h5>
          </div>
          <!-- formulaire -->
          <form class="py-3" @submit.prevent="submitForm">
            <div class="did-floating-label-content mb-3">
              <input
                class="did-floating-input form-control"
                type="email"
                v-model="email"
                id="email"
                placeholder=" "
                required
              />
              <label class="did-floating-label">E-mail</label>
            </div>
            <div class="did-floating-label-content mb-3">
              <input
                class="did-floating-input form-control"
                type="password"
                v-model="password"
                id="password"
                placeholder=" "
                required
              />
              <label class="did-floating-label">Mot de passe</label>
              <div class="text-end">
                <router-link to="/forgot_password" class="links"
                  >Mot de pase oublié?</router-link
                >
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn-orange w-100 p-3">
                Se connecter
              </button>
            </div>
          </form>

          <div class="text-center mt-4">
            <div class="hr-container">
              <hr class="hr-left" />
              <span class="or-text">Ou se connecter avec</span>
              <hr class="hr-right" />
            </div>
            <ul class="list-inline mt-2">
              <li class="list-inline-item">
                <a href="#">
                  <img src="../assets/image/Logofacebook.png" alt="facebok" />
                </a>
              </li>
              <li class="list-inline-item mx-2">
                <a href="#">
                  <img src="../assets/image/Logogoogle.png" alt="google" />
                </a>
              </li>
            </ul>
            <p>
              Vous n'avez pas de compte ?
              <router-link to="/signup" class="links"
                ><span>S'inscrire</span></router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
