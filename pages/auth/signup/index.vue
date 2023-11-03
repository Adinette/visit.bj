<script setup lang="ts"> 

  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 
  import Ubutton from '~/Components/widgets/button/Ubutton.vue';
  import socialConnect from '~/Components/authComponent/socialConnect.vue';
  
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
      <div class="mb-3"><InputField type="text" label="Nom" v-model="signup.lastName" placeholder="Nom" /></div>
      <div class="mb-3"><InputField type="text" label="Prénom" v-model="signup.firstName" placeholder="Prénom" /></div>
      <div class="mb-3"><InputField type="email" label="E-mail" v-model="signup.email" placeholder="E-mail" /></div>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="signup.password"  placeholder="Mot de passe" /></div>
      <div class="mb-3"><Ubutton title="S'inscrire"/></div>
      <socialConnect/>
      <div class="text-center"><p class="mb-0">Avez-vous déjà un compte ? <NuxtLink to="/auth/login">Se connecter</NuxtLink></p></div> 
    </form>
  </authContent>

</template>

<style scoped></style>