<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-orange-600">Événements du Festival</h1>
    
    <!-- Sélecteur de catégorie -->
    <select v-model="selectedCategory" class="mb-4 p-2 rounded border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
      <option value="">Toutes les catégories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in filteredEvents" :key="event.id" class="bg-white p-4 rounded shadow">
        <!-- Ajout du lien pour aller à la page des détails -->
        <router-link :to="{ name: 'eventDetails', params: { id: event.id } }" class="block text-xl font-semibold text-orange-600 hover:underline">
          {{ event.title }}
        </router-link>
        <p class="text-gray-700">{{ event.description }}</p>
        <p class="text-gray-500">{{ event.date }}</p>
        <p class="text-gray-600">Catégorie: <span class="font-semibold text-orange-600">{{ event.category }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      searchQuery: '',
      events: [
        { id: 1, title: 'Atelier de danse', description: 'Apprenez les danses traditionnelles.', date: '2024-10-05', category: 'Electro' },
        { id: 2, title: 'Projection de film', description: 'Un film en plein air.', date: '2024-10-06', category: 'Pop' },
        { id: 3, title: 'Concert de jazz', description: 'Une soirée de jazz en live.', date: '2024-10-07', category: 'Jazz' },
        { id: 4, title: 'Exposition d\'art', description: 'Découvrez les œuvres d\'artistes locaux.', date: '2024-10-08', category: 'Art' },
      ],
      categories: [
        'Electro',
        'Pop',
        'Rap/Hip-Hop',
        'R&B/Urban Pop',
        'Jazz',
        'Art'
      ],
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        const matchesCategory = this.selectedCategory ? event.category === this.selectedCategory : true;
        const matchesSearch = this.searchQuery ? event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || event.description.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
        return matchesCategory && matchesSearch;
      });
    },
  },
};
</script>

<style scoped>
h1, h2 {
  color: #ea580c; /* orange-600 */
}

p {
  color: #262626; /* neutral-800 */
}

.bg-white {
  background-color: #ffffff; /* white */
}

.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded {
  border-radius: 0.5rem;
}
</style>
