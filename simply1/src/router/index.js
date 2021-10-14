import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recetas from '../views/Recetas.vue'
import Receta from '../views/Receta.vue'
import Preparaciones from '../views/Preparaciones.vue'
import Preparacion from '../views/Preparacion.vue'
import Administracion from '../views/Administracion.vue'
import Variedad from '../views/Variedad.vue'
import Mundo from '../views/Mundo.vue'
import Certificacion from '../views/Certificacion.vue'
import Colombia from '../views/Colombia.vue'
import Detalledo from '../views/Detalledo.vue'
import DO from '../views/DO.vue'
import Nosotros from '../views/Nosotros.vue'


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
    path: '/do',
    name: 'DO',
    
    component: () => import(/* webpackChunkName: "colombia" */ '../views/DO.vue')
  },
  {
    path: '/taza',
    name: 'Taza',
    
    component: () => import(/* webpackChunkName: "colombia" */ '../views/Taza.vue')
  },
  {
    path: '/certificacion',
    name: 'Certificacion',
    
    component: () => import(/* webpackChunkName: "colombia" */ '../views/Certificacion.vue')
  },
  {
    path: '/colombia',
    name: 'Colombia',
    
    component: () => import(/* webpackChunkName: "colombia" */ '../views/Colombia.vue')
  },
  {
    path: '/detalledo',
    name: 'Detalledo',
    
    component: () => import(/* webpackChunkName: "colombia" */ '../views/Detalledo.vue')
  },
  {
    path: '/administracion/',
    name: 'Administracion',
    
    component: () => import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue'),
    children: [
      {
        path: 'usuarios',
        name: 'Usuarios',
        component: () => import(/* webpackChunkName: "usuarios" */ '../components/GestionUsuarios.vue'),
      },
      {
        path: 'gestionrecetas',
        name: 'GestionRecetas',
        component: () => import(/* webpackChunkName: "usuarios" */ '../components/GestionRecetas.vue'),
      },
      {
        path: 'gestionpreparaciones',
        name: 'GestionPreparaciones',
        component: () => import(/* webpackChunkName: "usuarios" */ '../components/GestionPreparaciones.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
