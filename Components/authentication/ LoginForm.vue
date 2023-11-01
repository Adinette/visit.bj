<script setup>
import InputField from '../widgets/input/InputField.vue';
 
</script>

<template>
  <form>
    <div class="mb-3"><InputField type="email" label="E-mail" v-model="email" placeholder="E-mail" /></div>
    <div class="mb-3"><InputField type="password" label="Mot de passe"  v-model="password"  placeholder="Mot de passe" /></div>
    <div class="text-end mb-3"><NuxtLink to="#">Mot de pase oublié?</NuxtLink></div>
    <button type="submit">Login</button>
    <p v-if="feedback">{{ feedback }}</p>
  </form>
</template>