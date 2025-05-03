export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt'],
  devtools: { enabled: true },
  srcDir: 'src/',
  eslint: {
    config: {
      standalone: false,
    },
  },
})
