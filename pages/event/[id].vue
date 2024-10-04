<template>
    <div>
        <div class="container mx-auto p-6">
          <h1 class="text-3xl font-bold mb-4 text-orange-600">Détails de l'événement</h1>
          
          <div v-if="event" class="bg-white rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-orange-600">{{ event.name }}</h2>
            <p class="text-lg mt-2 text-gray-700">{{ event.description }}</p>
            <p class="mt-2 text-gray-500">Début : {{ event.startTime }}</p>
            <p class="mt-2 text-gray-500">Fin : {{ event.endTime }}</p>
          </div>
        
  
          <div v-else-if="loading">
            <p class="text-gray-600">Chargement des détails de l'événement...</p>
          </div>
  
          <div v-else>
            <p class="text-red-600">Erreur lors de la récupération des détails de l'événement.</p>
          </div>
        </div>

        <div class="container mx-auto px-6 lg:px-8">
                <Map />
            </div>
      </div>
</template>
  
<script>
export default {
    data() {
      return {
        event: null,
        loading: true,
        error: null,
      };
    },
    async mounted() {
      await this.fetchEventDetails();
    },
    methods: {
      async fetchEventDetails() {
        const eventId = this.$route.params.id;
        console.log("Event ID:", eventId); 
        try {
          const response = await this.$axios.get(`/events/${eventId}`, { 
            headers: {
              'Accept': 'application/json' 
            }
          }); 
          this.event = response.data.event; 
        } catch (error) {
          this.error = "Erreur lors de la récupération des détails de l'événement.";
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>
  
<style scoped>
/* Styles supplémentaires si nécessaire */
</style>
