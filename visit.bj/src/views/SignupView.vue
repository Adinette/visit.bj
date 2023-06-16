<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signup } from "../service/signup.service";

const email = ref("");
const password = ref("");
const confirm_password = ref("");
const router = useRouter();

const submitForm = async (event) => {
  event.preventDefault();
  if (
    email == "" ||
    password == "" ||
    (email.value==""|| password.value==""||confirm_password.value == "" && password.value !== confirm_password.value)
  ) {
    alert("ok");
  } else {
    try {
      const auth = await signup({
        email: email.value,
        password: password.value,
        
      });
      console.log(auth);
      const reference = auth.data.reference; 
      localStorage.setItem('reference', reference); 
      
      
      router.push({ name: "dashbord" });                 

      (email.value = ""), (password.value = "");
      confirm_password.value = "";
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div class="register">
    <div class="container">
      <div class="row d-flex h-100 justify-content-center">
        <div class="border rounded rounded-4 col-sm-12 col-lg-6 p-5 colorform">
          <div class="text-center mb-4">
            <img src="../assets/image/logo.png" alt="Logo" class="logo-img" />
          </div>
          <div>
            <h1 class="fw-bold">S'inscrire</h1>
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
            </div>
            <div class="did-floating-label-content mb-3">
              <input
                class="did-floating-input form-control"
                type="password"
                v-model="confirm_password"
                id="confirmepassword"
                placeholder=" "
                required
              />
              <label class="did-floating-label">Confirmer mot de passe</label>
            </div>
            <div class="text-center">
              <button type="submit" class="btn-orange w-100 p-3">
                S'inscrire
              </button>
            </div>
          </form>

          <div class="text-center mt-4">
            <div class="hr-container">
              <hr class="hr-left" />
              <span class="or-text">Ou s'inscrire avec</span>
              <hr class="hr-right" />
            </div>
            <ul class="list-inline mt-2">
              <li class="list-inline-item">
                <a href="#">
                  <img
                    src="../assets/image/Logogoogle.png"
                    alt="facebok"
                    class="iconreseausoiaux"
                  />
                </a>
              </li>
              <li class="list-inline-item mx-2">
                <a href="#">
                  <img
                    src="../assets/image/Logofacebook.png"
                    alt="google"
                    class="iconreseausoiaux"
                  />
                </a>
              </li>
            </ul>
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
