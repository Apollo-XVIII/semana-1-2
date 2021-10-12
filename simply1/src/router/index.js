import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recetas from '../views/Recetas.vue'
import Receta from '../views/Receta.vue'
import Preparaciones from '../views/Preparaciones.vue'
import Preparacion from '../views/Preparacion.vue'
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

    component: () => import(/* webpackChunkName: "recetas" */ '../views/Recetas.vue')
  },
  {
    path: '/receta/:id',
    name: 'Receta',

    component: () => import(/* webpackChunkName: "receta" */ '../views/Receta.vue')
  },
  {
    path: '/preparaciones',
    name: 'Preparaciones',

    component: () => import(/* webpackChunkName: "preparaciones" */ '../views/Preparaciones.vue')
  },
  {
    path: '/preparacion/:id',
    name: 'Preparacion',

    component: () => import(/* webpackChunkName: "preparacion" */ '../views/Preparacion.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  }
  ,
  {
    path: '/inicio',
    name: 'Inicio',
    
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/historia',
    name: 'Historia',
    
    component: () => import(/* webpackChunkName: "historia" */ '../views/Historia.vue')
  },
  {
    path: '/tipos',
    name: 'Tipos',
    
    component: () => import(/* webpackChunkName: "tipos" */ '../views/Tipos.vue')
  },
  {
    path: '/mundo',
    name: 'Mundo',
    
    component: () => import(/* webpackChunkName: "mundo" */ '../views/Mundo.vue')
  },
  {
    path: '/variedad',
    name: 'Variedad',
    
    component: () => import(/* webpackChunkName: "variedad" */ '../views/Variedad.vue')
  },
  {
    path: '/colombia',
    name: 'Colombia',
    
    component: () => import(/* webpackChunkName: "colombia" */ '../views/Colombia.vue')
  },
  {
    path: '/usuarios/',
    name: 'Usuarios',
    
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuarios.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
