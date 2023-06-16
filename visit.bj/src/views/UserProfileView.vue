<script setup>
import { ref } from "vue";
import { addProfile, updatePassword } from "../service/userProfil.service";

const editPassword = ref(false);
const editMode = ref(false);
const firstName = ref("");
const lastName = ref("");
const contact = ref("");
const profilePicture = ref("");
const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

function toggleEditMode() {
  editMode.value = !editMode.value;
}
function toggleEditPassword() {
  editPassword.value = !editPassword.value;
}
const saveProfile = async (event) => {
  event.preventDefault();
  if (firstName == "" || lastName == "" || contact == "") {
    alert("ok");
  } else {
    try {
      const profile = await addProfile({
        firstName: nom.value,
        lastName: prenom.value,
        contact: password.value,
      });
      console.log(profile);

      (nom.value = ""), (prenom.value = "");
    } catch (error) {
      console.log(error);
    }
  }
};
const changePassword = async (event) => {
  event.preventDefault();
  if (
    confirmPassword == "" ||
    newPassword == "" ||
    (currentPassword == "" && newPassword == confirmPassword)
  ) {
    alert("ok");
  } else {
    try {
      const addPassword = await updatePassword({
        confirmPassword: confirmPassword.value,
        newPassword: newPassword.value,
        currentPassword: currentPassword.value,
      });
      console.log(addPassword);

      (confirmPassword.value = ""),
        (newPassword.value = ""),
        (currentPassword.value = "");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <section style="background-color: white">
    <div class="container py-5">
      <div class="row">
        <button class="btn btn-link" @click="toggleEditPassword">
          {{ editPassword ? "Annuler" : "Modifier son mot de passe" }}
        </button>
        <div class="col-lg-4">
          <div class="mb-4">
            <div class="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                class="img-fluid"
                style="width: 150px"
              />
            
            </div>
            <button type="button" class="btn btn-outline-dark text-align-center" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                <i class="bi bi-camera-fill"></i>
              </button>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="mb-4">
            <div class="card-body">
              <form @submit.prevent="saveProfile">
                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">Full Name :</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Johnatan Smith"
                      :disabled="!editMode"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">Email :</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="johnatansmith@gmail.com"
                      :disabled="!editMode"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">Phone:</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="+22951515353"
                      :disabled="!editMode"
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label">Address :</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cotonou/BENIN"
                      :disabled="!editMode"
                    />
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary" v-if="editMode">
                    Enregistrer
                  </button>
                  <button class="btn btn-link" @click="toggleEditMode">
                    {{ editMode ? "Annuler" : "Modifier" }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="row">
          <div v-if="editPassword">
            <form @submit.prevent="changePassword">
              <div class="form-group">
                <label for="currentPassword">Mot de passe actuel</label>
                <input
                  type="password"
                  class="form-control"
                  id="currentPassword"
                  placeholder="Mot de passe actuel"
                  v-model="currentPassword"
                  :disabled="!editPassword"
                />
              </div>
              <div class="form-group">
                <label for="newPassword">Nouveau mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  id="newPassword"
                  placeholder="Nouveau mot de passe"
                  v-model="newPassword"
                  :disabled="!editPassword"
                />
              </div>
              <div class="form-group">
                <label for="confirmPassword"
                  >Confirmer le nouveau mot de passe</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Confirmer le nouveau mot de passe"
                  v-model="confirmPassword"
                  :disabled="!editPassword"
                />
              </div>
              <div class="text-center">
                <button class="btn btn-link" @click="toggleEditPassword">
                  {{ editPassword ? "Annuler" : "Modifier" }}
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  v-if="editPassword"
                >
                  Changer le mot de passe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Ajoute tes styles CSS personnalisés ici */
</style>
