<template>
  <div class="bg-grey-800">
    <h1 class="text-2xl font-bold mb-4 bg-grey-800 text-white text-center">Trouvez nous facilement !</h1>

    <div id="map" class="h-full"></div>


  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

onMounted(() => {
  // Initialisation de la carte centrée sur Rouen
  const map = L.map('map').setView([49.4432, 1.0999], 13);

  // Ajouter une couche de tuiles (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Marqueur pour Rouen
  L.marker([49.4437, 1.0947]).addTo(map)
    .bindPopup('Lieux Principale : Esplanade Saint Gervais')
    .openPopup();

  // Ajouter plusieurs points d'intérêt à Rouen
  const locations = [
  { name: 'Esplanade Saint Gervais', coords: [49.4437, 1.0947] },
    { name: 'Cathédrale de Rouen', coords: [49.4009, 1.0972] },
    { name: 'Gros Horloge', coords: [49.4433, 1.0948] },
    { name: 'Place du Vieux Marché', coords: [49.4441, 1.0971] },
  ];

  locations.forEach(location => {
    L.marker(location.coords).addTo(map)
      .bindPopup(`Bienvenue à ${location.name}!`);
  });

  // Ajouter  polygone pour une zone spécifique
  const polygon = L.polygon([
    [49.446, 1.093],
    [49.446, 1.101],
    [49.440, 1.101],
    [49.440, 1.093]
  ]).addTo(map);
  
  polygon.bindPopup('Zone de Rouen');
});
</script>

<style>
#map {
  height: 400px; /* Hauteur de la carte */
}
</style>
