import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RegistrationForm from '../components/RegistrationForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/pendaftaran',
    name: 'Registration',
    component: RegistrationForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
