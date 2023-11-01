<template>
  <form @submit.prevent="handleSubmit">
    <InputField type="email" label="Email" id="email" :validator="emailValidator" v-model="email" />
    <InputField type="password" label="Password" id="password" :validator="passwordValidator" v-model="password" />
    <button type="submit">Login</button>
    <p v-if="feedback">{{ feedback }}</p>
  </form>
</template>

<script>
import InputField from './InputField.vue';

export default {
  components: {
    InputField
  },
  data() {
    return {
      email: '',
      password: '',
      feedback: ''
    };
  },
  methods: {
    emailValidator(email) {
      if (!email) return 'Email is required.';
      const re = /\S+@\S+\.\S+/;
      if (!re.test(email)) return 'Email is invalid.';
      return null;
    },
    passwordValidator(password) {
      if (!password) return 'Password is required.';
      if (password.length < 6) return 'Password is too short.';
      return null;
    },
    handleSubmit() {
      this.feedback = 'Login successful'; // you can update this based on your backend response
    }
  }
};
</script>

