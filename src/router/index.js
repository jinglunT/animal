import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aquarium from '../components/Aquarium.vue'
import Reptiles from '../components/Reptiles.vue'
import Insect from '../components/Insect.vue'
import Insect2 from '../components/Insect2.vue'
import Insect3 from '../components/Insect3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/aquarium',
    name: 'Aquarium',
    component: Aquarium
  },
    {
    path: '/reptiles',
    name: 'Reptiles',
    component: Reptiles
  },
    {
    path: '/insect',
    name: 'Insect',
    component: Insect
  },
     {
    path: '/insect2',
    name: 'Insect2',
    component: Insect2
  },
     {
    path: '/insect3',
    name: 'Insect3',
    component: Insect3
  },
   {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
