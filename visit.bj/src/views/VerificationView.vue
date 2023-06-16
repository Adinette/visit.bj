<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { verify } from "../service/verification.service";

const code1 = ref("");
const code2 = ref("");
const code3 = ref("");
const code4 = ref("");
const code5 = ref("");
const router = useRouter();

const submitForm = async (event) => {
  event.preventDefault();
  if (code1.value == "" || code2.value == "" || code3.value == "" || code4.value == "" || code5.value == "") {
    alert("ok");
  } else {
    try {
      const email = localStorage.getItem("email");
      const forgot = await verify({
        email: email,
        code1: code1.value,
        code2: code2.value,
        code3: code3.value,
        code4: code4.value,
        code5: code5.value,
      });
      console.log(forgot);

      router.push("/password");
      code1.value = "";
      code2.value = "";
      code3.value = "";
      code4.value = "";
      code5.value = "";
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div class="verification">
    <div class="container">
      <div class="row d-flex vh-100 justify-content-center">
        <div class="border rounded rounded-4 col-sm-12 col-lg-6 p-5 colorform">
          <div class="text-center mb-4">
            <img src="../assets/image/logo.png" alt="Logo" class="logo-img" />
          </div>
          <div>
            <h1 class="fw-bold">Vérification</h1>
            <h5 class="fw-light">Entrez votre adresse mail</h5>
          </div>
          <!-- formulaire -->
          <div class="d-flex justify-content-center">
            <form @submit.prevent="submitForm">
              <div class="row my-5">
                <div class="col">
                  <input
                    type="number"
                    class="form-control square-input center-placeholder no-scrollbar"
                    v-model="code1"
                    placeholder="-"
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control square-input center-placeholder no-scrollbar"
                    v-model="code2"
                    placeholder="-"
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control square-input center-placeholder no-scrollbar"
                    v-model="code3"
                    placeholder="-"
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control square-input center-placeholder no-scrollbar"
                    v-model="code4"
                    placeholder="-"
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control square-input center-placeholder no-scrollbar"
                    v-model="code5"
                    placeholder="-"
                  />
                </div>
              </div>
              <div class="text-center my-3">
                <button type="submit" class="btn-orange w-100 p-3">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <div class="text-center">
            <p>
              Vous n'avez pas reçu de code ?
              <a href="#" class="links"><span>Renvoyer</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
