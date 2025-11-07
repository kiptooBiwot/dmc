// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'accent',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:5000/api/v1',
        changeOrigin: true,
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },
})
