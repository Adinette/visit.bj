<script setup>
  
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 

  definePageMeta({
    layout: 'custom'
  });

</script>

<template>
  <authContent title="Mot de passe oublié?" subtitle="Entrez votre adresse mail">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="email" label="E-mail" v-model="email" placeholder="E-mail" /></div>
      <button type="submit">Envoyer</button>
      <div class="text-center"><p class="mb-0">Avez-vous déjà un compte ?  <NuxtLink to="/auth/login">Se connecter</NuxtLink></p></div> 
    </form>  
  </authContent>
  
</template>

<style scoped></style>