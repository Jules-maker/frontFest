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
})
