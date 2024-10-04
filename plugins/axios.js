import axios from 'axios';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  // Configurez l'instance d'axios
  nuxtApp.provide('axios', axios.create({
    baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre API
  }));

  // Vous pouvez également ajouter des interceptors ou d'autres configurations ici si nécessaire
});
