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
      <div class="mb-4"><InputField type="password" label="Mot de passe"  v-model="password"  placeholder="Mot de passe" /></div>
      <div class="mb-4"><InputField type="password" label="Confirmer mot de passe"  v-model="passwordConfirm"  placeholder="Confirmer mot de passe" /></div>
      <button type="submit">Envoyer</button>
     </form>  
  </authContent>
  
</template>

<style scoped></style>