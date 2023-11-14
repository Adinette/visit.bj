<template>
  <Auth title="Se connecter">
    <form>
      <p v-if="feedback">{{ feedback }}</p>
      <div class="mb-3">
        <InputField
          type="email"
          label="E-mail"
          v-model="login.email"
          placeholder="E-mail"
        />
      </div>
      <div class="mb-3">
        <InputField
          type="password"
          label="Mot de passe"
          v-model="login.password"
          placeholder="Mot de passe"
        />
      </div>
      <div class="text-end mb-3">
        <NuxtLink to="/auth/resetPassword">Mot de pase oublié?</NuxtLink>
      </div>
      <div class="mb-3"><button>Se connecter</button></div>
      <Social />
      <div class="text-center">
        <p class="mb-0">
          Vous n'avez pas de compte ?
          <NuxtLink to="/auth/signup">S'inscrire</NuxtLink>
        </p>
      </div>
    </form>
  </Auth>
</template>

<script setup>
const login = ref({
  email: "",
  password: "",
});

const feedback = ref("");
</script>
