import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt'],

  content: {
    highlight: {
      theme: 'vitesse-dark',
    },
  },

  unocss: {
    preflight: true,
  },
})
