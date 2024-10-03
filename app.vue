<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <Navbar/>
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer/>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #1f2937;
}

#__nuxt {
  height: 100%;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.main-content {
  flex: 1;
}
</style>
