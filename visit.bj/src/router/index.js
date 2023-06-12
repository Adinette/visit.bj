import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import Forgot_passwordView from '../views/Forgot_passwordView.vue'
import PasswordView from '../views/PasswordView.vue'
import VerificationView from '../views/VerificationView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: Forgot_passwordView
    },
    {
      path: '/password',
      name: 'password',
      component: PasswordView
    },
    {
      path: '/verification',
      name: 'verification',
      component: VerificationView
    },
  ]
  
})

export default router