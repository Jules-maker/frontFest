import { createRouter, createWebHistory } from 'vue-router';
import EventDetails from '~/pages/event/[id].vue'; // Assurez-vous que le chemin est correct

const routes = [
    
  {
    path: '/event/:id', // Cette route doit correspondre à l'URL
    name: 'eventDetails',
    component: EventDetails
  },
  // Autres routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
