<template>
  <Auth title="Mot de passe oublié?" subtitle="Entrez votre adresse mail">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="email" label="E-mail" v-model="email" placeholder="E-mail" /></div>
      <div class="text-center"><NuxtLink to="/auth/reset-password/reset">Creer un nouveau mot de passe</NuxtLink></div> 
    </form>  
  </Auth>
  
</template>

<script setup></script>