import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import Home from '@/page/VistaHome.vue';
import AllProjects from '@/page/AllProjects.vue';
import AllCertifications from '@/page/AllCertifications.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Página principal
  },
  {
    path: '/all-projects',
    name: 'AllProjects',
    component: AllProjects, 
  },
  {
    path: '/all-certifications',
    name: 'AllCertifications',
    component: AllCertifications,
  },
];

const router = createRouter({
  history: createWebHistory(), // Usa el modo de historial de HTML5
  routes,
});

export default router;
