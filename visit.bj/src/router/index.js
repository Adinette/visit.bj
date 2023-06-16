import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import Forgot_passwordView from "../views/Forgot_passwordView.vue";
import PasswordView from "../views/PasswordView.vue";
import VerificationView from "../views/VerificationView.vue";
import DashbordView from "../views/DashbordView.vue";
import UserProfileView from "../views/UserProfileView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/forgot_password",
      name: "forgot_password",
      component: Forgot_passwordView,
    },
    {
      path: "/password",
      name: "password",
      component: PasswordView,
    },
    {
      path: "/verification",
      name: "verification",
      component: VerificationView,
    },
    {
      path: "/dashbord",
      name: "dashbord",
      component: DashbordView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/userProfile",
      name: "userProfile",
      component: UserProfileView,
      meta: {
        requireAuth: true,
      },
    },
   
  ],
});
// const token_duration = 3600000;

// router.beforeEach((to, from, next) => {
//   const istoken = localStorage.getItem("token");
//   const role = localStorage.getItem("role");
//   const tokenExpiration = localStorage.getItem("tokenExpiration");
//   const now = Date.now();

//   const intervalId="";
//   if (
//     to.matched.some((record) => record.meta.requireAuth) &&
//     to.matched.some((record) => record.meta.requireAdmin)
//   ) {
//     if (istoken) {
//       if (role === "admin") {
//         if (now >= tokenExpiration) {
//           // Effacer le token et rediriger vers la page de connexion
//           localStorage.removeItem("token");
//           localStorage.removeItem("tokenExpiration");
//           localStorage.removeItem("role");
//           const clearInterval=(intervalId);
//           next({ name: "compte" });
//         } else {
//           // Mettre à jour l'heure d'expiration du token
//           localStorage.setItem("tokenExpiration", now + token_duration);
//           next();
//         }
//       } else {
//         next({ name: "home" });
//       }
//     } else {
//       clearInterval(intervalId);
//       next({ name: "compte" });
//     }
//   } else {
//     next();
//   }
// });
export default router;
