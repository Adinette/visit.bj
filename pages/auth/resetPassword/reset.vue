<script setup lang="ts">
  
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 
  import UButton from '~/Components/widgets/button/UButton.vue';

  definePageMeta({
    layout: 'custom'
  });
  
  useHead({
    title: "Se connecter",
  });

  const reset = ref({
    password: '',
    passwordConfirm: '',
  });

  const feedback = ref('');
</script>

<template>
  <authContent title="Créer mot de passe" subtitle="Créer un nouveau mot de passe">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="reset.password"  placeholder="Mot de passe" /></div>
      <div class="mb-3"><InputField type="password" label="Confirmer mot de passe"  v-model="reset.passwordConfirm"  placeholder="Confirmer mot de passe" /></div>
      <UButton />
     </form>   
  </authContent>
  
</template>

<style scoped></style>