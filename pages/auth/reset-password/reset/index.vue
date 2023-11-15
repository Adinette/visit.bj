<template>
  <Auth title="Créer mot de passe" subtitle="Créer un nouveau mot de passe">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="reset.password"  placeholder="Mot de passe" /></div>
      <div class="mb-3"><InputField type="password" label="Confirmer mot de passe"  v-model="reset.passwordConfirm"  placeholder="Confirmer mot de passe" /></div>
      <div> <NuxtLink  class="btn btn-primary w-100 p-3" to="/auth/verification">Envoyer</NuxtLink> </div>
     </form>   
  </Auth>
  
</template>

<script setup>

  const reset = ref({
    password: '',
    passwordConfirm: '',
  });

  const feedback = ref('');

</script>