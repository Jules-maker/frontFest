<template>
  <div>
    <h2 class="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Trouvez-nous facilement !</h2>
    <div id="map" style="height: 500px;"></div>  
    <p class="text-center mt-4 text-gray-700 dark:text-gray-300">Adresse Principale : Esplanade Saint Gervais, Boulevard Emile Duchemin, 76000 Rouen</p>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      import('leaflet').then(L => {
        const defaultLocation = { name: 'Esplanade Saint Gervais', coords: [49.444766, 1.059034],event: 'Adresse Principale' };
        const map = L.map('map').setView(defaultLocation.coords, 18);  

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);

        const locations = [
          defaultLocation,
          { name: 'Concert Electro', coords: [49.4448, 1.0601], event: 'Concert Electro - 10 octobre, 20h' },
          { name: 'Festival Pop', coords: [49.4446, 1.0598], event: 'Festival Pop - 12 octobre, 18h' },
          { name: 'Soirée Rap/Hip-Hop', coords: [49.4449, 1.0589], event: 'Soirée Rap/Hip-Hop - 15 octobre, 22h' },
          { name: 'R&B Party', coords: [49.4447, 1.0595], event: 'R&B Party - 18 octobre, 19h' },
          { name: 'Rock Night', coords: [49.4445, 1.0603], event: 'Rock Night - 20 octobre, 21h' },
          { name: 'Metal Fest', coords: [49.4444, 1.0592], event: 'Metal Fest - 22 octobre, 18h' }
        ];

        locations.forEach(location => {
          const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${location.coords[0]},${location.coords[1]}`;
          const marker = L.marker(location.coords).addTo(map)
            .bindPopup(`
              <strong>${location.name}</strong><br>
              ${location.event}<br>
              <a href="${googleMapsLink}" target="_blank">Itinéraire</a>
            `);

          // Ouvrir le popup pour le marqueur par défaut
          if (location === defaultLocation) {
            marker.openPopup();
          }
        });

        const circle = L.circle(defaultLocation.coords, {
          color: 'blue',
          fillColor: '#add8e6',
          fillOpacity: 0.5,
          radius: 150
        }).addTo(map);
      });
    }
  }
}


</script>

<style>
#map {
  height: 500px;
}
</style>
