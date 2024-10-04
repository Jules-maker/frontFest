<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-orange-600">Événements du Festival</h1>
    
    <select v-model="selectedCategory" class="mb-4 p-2 rounded border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
      <option value="">Toutes les catégories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in filteredEvents" :key="event._id" class="bg-white p-4 rounded shadow border-b-8 border-orange-500">
        <router-link :to="{ path: `/event/${event._id}` }" class="text-orange-600 font-bold hover:underline">
          {{ event.name }}
        </router-link>
        <p class="text-gray-700">{{ event.description }}</p>
        <p class="text-gray-500">Début: {{ event.startTime }}</p>
        <p class="text-gray-500">Fin: {{ event.endTime }}</p>
        <!-- <p class="text-gray-600">Catégorie: <span class="font-semibold text-orange-600">{{ event.category }}</span></p> -->
      </div>
    </div>

    <div v-if="loading" class="text-gray-600">Chargement des événements...</div>
    <div v-if="error" class="text-red-600">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      events: [],
      categories: ['Angèle', 'Aya Nakamura', 'Billie Eilish', 'Dadju', 'David Guetta', 'Gojira', 'Julien Doré', 'King Gizzard & the Lizard Wizard', 'Les wrappettes', 'Louane', 'Slimane', 'Stromaé', 'Vianney'], // Mise à jour des catégories
      loading: true,
      error: null
    };
  },
  computed: {
    filteredEvents() {
      return this.events
        .filter(event => {
          const matchesName = this.selectedCategory ? event.name.includes(this.selectedCategory) : true; // Filtrage par nom
          return matchesName;
        })
        .sort((a, b) => a.name.localeCompare(b.name)); // Tri par nom
    },
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/events'); // Assurez-vous que l'URL est correcte
      this.events = response.data.events; // Vérifiez que la structure de la réponse est correcte
    } catch (error) {
      this.error = "Erreur lors de la récupération des événements";
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
