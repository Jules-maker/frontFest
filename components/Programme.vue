<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Programme</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="item in programme" :key="item.id" class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-semibold">{{ item.title }}</h2>
          <p class="text-gray-700">{{ item.description }}</p>
          <p class="text-gray-500">{{ item.time }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        programme: [
          { id: 1, title: 'Concert d\'ouverture', description: 'Un concert incroyable pour démarrer le festival.', time: '18:00' },
          { id: 2, title: 'DJ Set', description: 'Une soirée avec les meilleurs DJs.', time: '21:00' },
          // Ajoutez d'autres éléments du programme ici
        ],
      };
    },
  };
  </script>
  
  <style scoped>
 /* .container {
    background-color: #fef9c3; /* yellow-100
  }
 */
  h1,  h2 {
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
