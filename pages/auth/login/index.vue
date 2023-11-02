<script setup lang="ts"> 
  
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 
  import Community from '~/Components/authComponent/Community.vue';

  definePageMeta({
    layout: 'custom'
  });
  
  useHead({
    title: "Se connecter",
  });

  const userData = ref({
    email: '',
    password: '',
  });

  const feedback = ref('');

</script>

<template>

  <authContent title="Se connecter">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-4"><InputField type="email" label="E-mail" v-model="userData.email" placeholder="E-mail" /></div>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="userData.password"  placeholder="Mot de passe" /></div>
      <div class="text-end mb-3"><NuxtLink to="/auth/resetPassword">Mot de pase oublié?</NuxtLink></div>
      <div class="mb-4"><button type="submit">Se connecter</button></div>
      
      <Community/>
      <div class="text-center"><p class="mb-0">Vous n'avez pas de compte ? <NuxtLink to="/auth/signup">S'inscrire</NuxtLink></p></div> 
    </form>
  </authContent>

</template>

<style scoped></style>