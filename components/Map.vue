<template>
  <div>
    <h2 class="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Trouvez-nous facilement !</h2>
  <div id="map" style="height: 500px;"></div>  
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      import('leaflet').then(L => {
        const map = L.map('map').setView([49.4411767, 1.1034718], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);

        // Ajout de marqueurs avec liens vers Google Maps
        const locations = [
          { name: 'Esplanade Saint Gervais', coords: [49.4437, 1.0947] },
          { name: 'Gros Horloge', coords: [49.4433, 1.0948] },
          { name: 'Place du Vieux Marché', coords: [49.4441, 1.0971] },
          { name: 'Need for School', coords: [49.4411767, 1.1034718] }
        ];

        locations.forEach(location => {
          const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${location.coords[0]},${location.coords[1]}`;
          L.marker(location.coords).addTo(map)
            .bindPopup(`
              <strong>${location.name}</strong><br>
              <a href="${googleMapsLink}" target="_blank">Itinéraire</a>
            `)
            .openPopup();
        });

        // Ajout d'une zone (par exemple, un cercle)
        const circle = L.circle( [49.4437, 1.0947], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 250
        }).addTo(map);

        // Exemple de fonction pour obtenir des directions
        async function getDirections(origin, destination) {
          const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=YOUR_API_KEY`);
          const data = await response.json();
          return data.routes[0].overview_polyline.points;
        }

        // Exemple d'utilisation dans Leaflet
        getDirections('49.2896256,0.999424', '49.4411767,1.1034718').then(polyline => {
          const decodedPolyline = L.Polyline.fromEncoded(polyline);
          L.polyline(decodedPolyline, { color: 'blue' }).addTo(map);
        });
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
