<template>
  <form>
    <div class="mb-3"><InputField type="email" label="Email" v-model="email" /></div>
    <div class="mb-3"><InputField type="password" label="Password"  v-model="password" /></div>
    <div class="text-end mb-3"><NuxtLink to="#">Mot de pase oublié?</NuxtLink></div>
    <button type="submit">Login</button>
    <p v-if="feedback">{{ feedback }}</p>
  </form>
</template>

<script setup>
import InputField from './InputField.vue';

 
</script>



