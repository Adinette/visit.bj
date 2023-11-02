<script setup>
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 


  definePageMeta({
    layout: 'custom'
  });

</script>

<template>
  <authContent title="Se connecter">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-4"><InputField type="email" label="E-mail" v-model="email" placeholder="E-mail" /></div>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="password"  placeholder="Mot de passe" /></div>
      <div class="text-end mb-3"><NuxtLink to="/auth/resetPassword">Mot de pase oublié?</NuxtLink></div>
      <button type="submit">Se connecter</button>
      <div class="text-center"><p class="text-black">Vous n'avez pas de compte ? <NuxtLink to="/auth/signup">S'inscrire</NuxtLink></p></div> 


     
    </form>
  </authContent>
</template>


<style scoped></style>