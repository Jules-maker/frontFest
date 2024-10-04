<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Artistes</h1> 
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="artist in artists" :key="artist._id" class="bg-white p-4 rounded shadow flex justify-between flex-col border-b-8 border-orange-500">
          <h2 class="text-xl font-semibold">{{ artist.name }}</h2> 
          <p class="text-gray-700">{{ artist.bio }}</p> 
          <div class="mt-5  bottom-0 w-full h-96">
          <img :src="'http://localhost:5000/api/public' + artist.image" alt="Image de {{ artist.name }}" class="w-full h-full rounded object-cover" /> 
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        artists: [], 
      };
    },
    mounted() {
      this.fetchArtists();
    },
    methods: {
      async fetchArtists() {
        try {
          const response = await fetch('http://localhost:5000/api/artists');
          const data = await response.json();
          this.artists = data.artists; 
        } catch (error) {
          console.error('Erreur lors de la récupération des artistes:', error);
        }
      },
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
