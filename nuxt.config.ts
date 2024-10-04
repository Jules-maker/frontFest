export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css',    'leaflet/dist/leaflet.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: true,
  compatibilityDate: '2024-10-04',
})