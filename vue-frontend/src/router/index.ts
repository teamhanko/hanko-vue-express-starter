import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProtectedView from '@/views/ProtectedView.vue'

async function isUserAuthenticated() {
  try {
    const response = await fetch('http://localhost:5001/api/protected', {
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
      path: '/login',
      name: 'login',
     component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
     component: DashboardView
    },
    {
      path: '/protected',
      name: 'protected',
     component: ProtectedView
    },
  ]
})


router.beforeEach(async (to, from, next) => {
  if (to.name === 'protected' && !(await isUserAuthenticated())) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
