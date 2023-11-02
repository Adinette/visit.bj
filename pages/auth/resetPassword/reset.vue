<script setup lang="ts">
  
  import authContent from '~/Components/authComponent/authContent.vue';
  import InputField from '~/Components/widgets/input/InputField.vue'; 

  definePageMeta({
    layout: 'custom'
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
      <div class="mb-4"><InputField type="password" label="Mot de passe"  v-model="reset.password"  placeholder="Mot de passe" /></div>
      <div class="mb-4"><InputField type="password" label="Confirmer mot de passe"  v-model="reset.passwordConfirm"  placeholder="Confirmer mot de passe" /></div>
      <button type="submit">Envoyer</button>
     </form>   
  </authContent>
  
</template>

<style scoped></style>