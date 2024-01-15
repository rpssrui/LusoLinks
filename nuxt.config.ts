export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/styles/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
});