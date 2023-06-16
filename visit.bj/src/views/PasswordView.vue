<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { update_password } from "../service/password.service";

const password = ref("");
const confirmpassword = ref("");
const router = useRouter();

const submitForm = async (event) => {
  event.preventDefault();
  if (password.value == "" || confirmpassword.value == "") {
    alert("ok");
  } else {
    try {
      const email = localStorage.getItem("email");
      const update = await update_password({
        email: email,
        password: password.value,
        confirmpassword: confirmpassword.value,
      });
      console.log(update);
      if (password == confirmpassword) {
        router.push("/login");
      } else {
        console.log("Mot de passe different");
      }
      password.value = "";
      confirmpassword.value = "";
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div class="createpassword">
    <div class="container">
      <div class="row d-flex vh-100 justify-content-center">
        <div class="border rounded rounded-4 col-sm-12 col-lg-6 p-5 colorform">
          <div class="text-center mb-4">
            <img src="../assets/image/logo.png" alt="Logo" class="logo-img" />
          </div>
          <div>
            <h1 class="fw-bold">Créer un mot de passe</h1>
            <h5 class="fw-light">Créer un nouveau mot de passe</h5>
          </div>
          <!-- formulaire -->
          <form class="py-3" @submit.prevent="submitForm">
            <div class="did-floating-label-content mb-3">
              <input
                class="did-floating-input form-control"
                type="password"
                id="newpassword"
                v-model="password"
                placeholder=" "
                required
              />
              <label class="did-floating-label">Mot de passe</label>
            </div>
            <div class="did-floating-label-content mb-3">
              <input
                class="did-floating-input form-control"
                type="password"
                id="confimepassword"
                v-model="confirmpassword"
                placeholder=" "
                required
              />
              <label class="did-floating-label">Confirmer mot de passe</label>
            </div>
            <div class="text-center">
              <button type="submit" class="btn-orange w-100 p-3">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
