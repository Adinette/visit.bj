// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "@vite-pwa/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  srcDir: "assets/**",
});
