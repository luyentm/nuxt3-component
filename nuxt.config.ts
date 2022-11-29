export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
})
