import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProfileView from '../views/ProfileView.vue'
import HomeView from '../views/HomeView.vue';

const securedRoutes = ["dashboard", "profile"];

async function isUserAuthenticated() {
  try {
    //Change this url to the url of your running hanko backend
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

//Middleware that runs before each navigation
router.beforeEach(async (to, from, next) => {
  //Check if you are on a secure route
  if (typeof to.name === "string" && securedRoutes.includes(to.name) && !(await isUserAuthenticated())) {
    next({ name: 'home' }); //Name of the route to redirect to if user is not authenticated
  } else {
    next();
  }
});
  
export default router
  