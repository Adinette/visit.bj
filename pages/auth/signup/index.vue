<template>

  <Auth title="S'inscrire">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="text" label="Nom" v-model="signup.lastName" placeholder="Nom" /></div>
      <div class="mb-3"><InputField type="text" label="Prénom" v-model="signup.firstName" placeholder="Prénom" /></div>
      <div class="mb-3"><InputField type="email" label="E-mail" v-model="signup.email" placeholder="E-mail" />
      <label class="floating-label">E-mail</label>
      </div>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="signup.password"  placeholder="Mot de passe" /></div>
      <!-- <div class="mb-3"><Ubutton title="S'inscrire"/></div> -->
      <div class="mb-3"><button type="submit" class="btn btn-primary w-100 p-3">S'inscrire</button></div>

      <Social/>
      <div class="text-center"><p class="mb-0">Avez-vous déjà un compte ? <NuxtLink to="/auth/login">Se connecter</NuxtLink></p></div> 
    </form>
  </Auth>


</template>


<script setup>
import Social from "@/components/auth/Social.vue";
  const signup = ref({
    lastName: '',
    firstName:'',
    email: '',
    password: '',
  });

  const feedback = ref('');
</script>