<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4 text-orange-600">Détails de l'événement</h1>
    <p class="text-lg mb-2">ID de l'événement : <span class="font-semibold text-gray-800">{{ id }}</span></p>
    
    <!-- Section d'informations sur l'événement -->
    <div class="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 class="text-2xl font-semibold text-gray-900">Informations sur l'événement</h2>
      <p class="mt-2 text-gray-700">Détails supplémentaires de l'événement peuvent être affichés ici.</p>
      
      <!-- Ajoutez ici des détails supplémentaires si disponibles -->
      <div class="mt-4">
        <p class="text-gray-600"><strong>Lieu:</strong> <span class="text-gray-800">À définir</span></p>
        <p class="text-gray-600"><strong>Date:</strong> <span class="text-gray-800">À définir</span></p>
        <p class="text-gray-600"><strong>Description:</strong> <span class="text-gray-800">À définir</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id; // Accéder à l'ID de l'événement
    }
  },
  // Si vous avez besoin d'effectuer des requêtes pour obtenir des détails d'événements
  mounted() {
    // Récupérez les détails de l'événement basé sur l'ID
  }
}
</script>

<style scoped>
/* Ajoutez ici des styles supplémentaires si nécessaire */
</style>
