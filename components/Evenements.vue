<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Événements du Festival</h1>
      
      <!-- Ajout du sélecteur de catégorie -->
      <select v-model="selectedCategory" class="mb-4 p-2 rounded border">
        <option value="">Toutes les catégories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="event in filteredEvents" :key="event.id" class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-semibold">{{ event.title }}</h2>
          <p class="text-gray-700">{{ event.description }}</p>
          <p class="text-gray-500">{{ event.date }}</p>
          <p class="text-gray-600">Catégorie: {{ event.category }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: '',
        events: [
          { id: 1, title: 'Atelier de danse', description: 'Apprenez les danses traditionnelles.', date: '2024-10-05', category: 'Danse' },
          { id: 2, title: 'Projection de film', description: 'Un film en plein air.', date: '2024-10-06', category: 'Cinéma' },
          { id: 3, title: 'Concert de jazz', description: 'Une soirée de jazz en live.', date: '2024-10-07', category: 'Musique' },
          { id: 4, title: 'Exposition d\'art', description: 'Découvrez les œuvres d\'artistes locaux.', date: '2024-10-08', category: 'Art' },
        ],
      };
    },
    computed: {
      categories() {
        return [...new Set(this.events.map(event => event.category))];
      },
      filteredEvents() {
        if (this.selectedCategory) {
          return this.events.filter(event => event.category === this.selectedCategory);
        }
        return this.events;
      },
    },
  };
  </script>
  
  <style scoped>
  /* .container {
    background-color: #fef9c3; /* yellow-100 
  } 
*/
  h1 {
    color: #ea580c; /* orange-600 */
  }

  h2 {
    color: #facc15; /* yellow-400 */
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
