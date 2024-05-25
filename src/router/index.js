import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
// import About from '../views/AboutPage.vue'
// import Projects from '../views/ProjectPage.vue'
// import Blog from '../views/PublicationsPage.vue'
// import Contact from '../views/ContactPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: Home },
//   { path: '/about', name: 'AboutPage', component: About },
//   { path: '/projects', name: 'ProjectPage', component: Projects },
//   { path: '/blog', name: 'PublicationsPage', component: Blog },
//   { path: '/contact', name: 'ContactPage', component: Contact }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
