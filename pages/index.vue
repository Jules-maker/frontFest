<template>
  <div>
<Home/>    
    <ClientOnly>

      <Map />
    </ClientOnly>
  </div>
</template>

<script setup>
import Map from '~/components/Map.vue'
</script>