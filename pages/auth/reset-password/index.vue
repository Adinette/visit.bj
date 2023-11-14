<template>
  <Auth title="Mot de passe oublié?" subtitle="Entrez votre adresse mail">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="email" label="E-mail" v-model="email" placeholder="E-mail" /></div>
      <div class="mb-3"><Ubutton /></div>
      <div class="text-center"><p class="mb-0">Avez-vous déjà un compte ?  <NuxtLink to="/auth/login">Se connecter</NuxtLink></p></div> 
    </form>  
  </Auth>
  
</template>

<script setup></script>