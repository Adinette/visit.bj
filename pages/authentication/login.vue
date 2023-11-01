<script setup>
  import Content from '~/Components/authentication/index.vue';
  import LoginForm from '../../Components/authentication/ LoginForm.vue';

  definePageMeta({
  layout: 'custom'
});

</script>

<template>
  <Content title="Se connecter">
    <LoginForm/>
  </Content>
</template>

<style scoped></style>