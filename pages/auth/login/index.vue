<script setup lang="ts"> 
  
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 
  import Ubutton from '~/Components/widgets/button/UButton.vue';
  import Community from '~/Components/authComponent/Community.vue';

  definePageMeta({
    layout: 'custom'
  });
  
  useHead({
    title: "Se connecter",
  });

  const login = ref({
    email: '',
    password: '',
  });

  const feedback = ref('');

</script>

<template>

  <authContent title="Se connecter">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="email" label="E-mail" v-model="login.email" placeholder="E-mail" /></div>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="login.password"  placeholder="Mot de passe" /></div>
      <div class="text-end mb-3"><NuxtLink to="/auth/resetPassword">Mot de pase oublié?</NuxtLink></div>
      <div class="mb-3"><Ubutton title="Se connecter"/></div>
      
      <Community/>
      <div class="text-center"><p class="mb-0">Vous n'avez pas de compte ? <NuxtLink to="/auth/signup">S'inscrire</NuxtLink></p></div> 
    </form>
  </authContent>

</template>

<style scoped></style>