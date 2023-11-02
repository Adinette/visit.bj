<script setup lang="ts"> 
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 
  import Community from '~/Components/authComponent/Community.vue';
  
  useHead({
    title: "S'inscrire",
  });

  definePageMeta({
    layout: 'custom'
  });

  const signup = ref({
    lastName: '',
    firstName:'',
    email: '',
    password: '',
  });

  const feedback = ref('');

</script>

<template>

  <authContent title="S'inscrire">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-4"><InputField type="text" label="Nom" v-model="signup.lastName" placeholder="Nom" /></div>
      <div class="mb-4"><InputField type="text" label="Prénom" v-model="signup.firstName" placeholder="Prénom" /></div>
      <div class="mb-4"><InputField type="email" label="E-mail" v-model="signup.email" placeholder="E-mail" /></div>
      <div class="mb-4"><InputField type="password" label="Mot de passe"  v-model="signup.password"  placeholder="Mot de passe" /></div>
      <div class="mb-4"><button type="submit">S'inscrire</button></div>

      <Community/>

      <div class="text-center"><p class="mb-0">Avez-vous déjà un compte ? <NuxtLink to="/auth/login">Se connecter</NuxtLink></p></div> 
    </form>
  </authContent>

</template>

<style scoped></style>