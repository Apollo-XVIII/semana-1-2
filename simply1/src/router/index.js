import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recetas from '../views/Recetas.vue'
import Receta from '../views/Receta.vue'
import Preparaciones from '../views/Preparaciones.vue'
import Preparacion from '../views/Preparacion.vue'
import Historia from '../views/Historia.vue'
import Tipos from '../views/Tipos.vue'
import Mundo from '../views/Mundo.vue'
import Variedad from '../views/Variedad.vue'
import Colombia from '../views/Colombia.vue'
import Usuarios from '../views/Usuarios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recetas',
    name: 'Recetas',

    component: () => import(/* webpackChunkName: "about" */ '../views/Recetas.vue')
  },
  {
    path: '/receta/:id',
    name: 'Receta',

    component: () => import(/* webpackChunkName: "about" */ '../views/Receta.vue')
  },
  {
    path: '/preparaciones',
    name: 'Preparaciones',

    component: () => import(/* webpackChunkName: "about" */ '../views/Preparaciones.vue')
  },
  {
    path: '/preparacion/:id',
    name: 'Preparacion',

    component: () => import(/* webpackChunkName: "about" */ '../views/Preparacion.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  }
  ,
  {
    path: '/inicio',
    name: 'Inicio',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  }

  ,
  {
    path: '/historia',
    name: 'Historia',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Historia.vue')
  }

  ,
  {
    path: '/tipos',
    name: 'Tipos',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Tipos.vue')
  }

  ,
  {
    path: '/mundo',
    name: 'Mundo',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Mundo.vue')
  }

  ,
  {
    path: '/variedad',
    name: 'Variedad',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Variedad.vue')
  }

  ,
  {
    path: '/colombia',
    name: 'Colombia',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Colombia.vue')
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue')
  }
  ,


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
