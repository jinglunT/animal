import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aquarium from '../components/Aquarium.vue'
import Aquarium2 from '../components/Aquarium2.vue'
import Aquarium3 from '../components/Aquarium3.vue'
import Reptiles from '../components/Reptiles.vue'
import Reptiles2 from '../components/Reptiles2.vue'
import Reptiles3 from '../components/Reptiles3.vue'
import Insect from '../components/Insect.vue'
import Insect2 from '../components/Insect2.vue'
import Insect3 from '../components/Insect3.vue'
import Post from '../components/Post.vue'
import P from '../components/P.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/p/:id',
    name: 'P',
    component: P
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/aquarium',
    name: 'Aquarium',
    component: Aquarium
  },
   {
    path: '/aquarium2',
    name: 'Aquarium2',
    component: Aquarium2
  },
   {
    path: '/aquarium3',
    name: 'Aquarium3',
    component: Aquarium3
  },
    {
    path: '/reptiles',
    name: 'Reptiles',
    component: Reptiles
  },
    {
    path: '/reptiles2',
    name: 'Reptiles2',
    component: Reptiles2
  },
    {
    path: '/reptiles3',
    name: 'Reptiles3',
    component: Reptiles3
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
