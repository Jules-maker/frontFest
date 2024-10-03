<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
#__nuxt {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
