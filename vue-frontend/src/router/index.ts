import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProfileView from '../views/ProfileView.vue'
import HomeView from '../views/HomeView.vue';

async function isUserAuthenticated() {

    try {
      const response = await fetch('http://localhost:5001/validate', {
        credentials: 'include',
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  }
  

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/dashboard',
        name: 'dashboard',
       component: DashboardView
      },
      {
        path: '/profile',
        name: 'profile',
       component: ProfileView
      },
    ],
  })
  
  
  router.beforeEach(async (to, from, next) => {
    if ((to.name === 'dashboard' || to.name === 'profile') && !(await isUserAuthenticated())) {
      next({ name: 'home' });
    } else {
      next();
    }
  });
  
  export default router
  