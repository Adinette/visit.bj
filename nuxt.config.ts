// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Visit.bj",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: 'https://fonts.gstatic.com" crossorigin' },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  pages: true,
  modules: [
    "@vite-pwa/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-swiper",
  ],

  devtools: { enabled: true },

  swiper: {
    styleLang: "css",
  },

  image: {
    inject: true,
    quality: 100,
    dir: "assets/images",
  },
  css: [
    "@/assets/css/bootstrap.css",
    "@/assets/css/theme.css",
    "@/assets/css/default.css",
    "@/assets/css/style.css",
  ],

  components: true,
});
