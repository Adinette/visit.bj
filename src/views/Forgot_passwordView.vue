<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reset } from "../service/forgot_password.service";

const email = ref("");
const router = useRouter();

const submitForm = async (event) => {
  event.preventDefault();
  if (email.value == "") {
    alert("ok");
  } else {
    try {
      const forgot = await reset({
        email: email.value,
      });
      console.log(forgot);
      localStorage.setItem("Email", forgot.email);

      router.push("/verification");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div class="forgetpasseword">
    <div class="container">
      <div class="row d-flex vh-100 justify-content-center">
        <div class="border rounded rounded-4 col-sm-12 col-lg-6 p-5 colorform">
          <div class="text-center mb-4">
            <img src="../assets/image/logo.png" alt="Logo" class="logo-img" />
          </div>
          <div>
            <h1 class="fw-bold">Mot de passe oublié?</h1>
          </div>
          <!-- formulaire -->
          <form class="py-3" @submit.prevent="submitForm">
            <h5 class="fw-light">Entrez votre adresse mail</h5>
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
            <div class="text-center">
              <button type="submit" class="btn-orange w-100 p-3">
                Envoyer
              </button>
            </div>
          </form>
          <div class="text-center">
            <p>
              Avez-vous déjà un compte ?
              <router-link to="/login" class="links"
                ><span>Se connecter</span></router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
