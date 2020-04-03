import Vue from 'vue'
import VueRouter from 'vue-router'
// import CasosPorDia from '../views/CasosPorDia.vue'
// import TabelaCasosPorMunicipio from '../views/TabelaPorMunicipio'
// import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio'
// import CasosEpidemiologicos from '../views/CasosEpidemiologicos'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dash/casos-por-dia',
    name: 'Casos por dia',
    component: () => import ('../views/CasosPorDia')
  },
  {
    path: '/dash/curva-epidemiologica',
    name: 'Casos por dia',
    component: () => import ('../views/CurvaEpidemiologica')
  },
  {
    path: '/dash/tabela-casos-por-municipio',
    name: 'Tabela Casos Por Municipio',
    component: () => import ('../views/TabelaPorMunicipio')
  },
  {
    path: '/dash/rosca-casos-por-municipio',
    name: 'rosca Casos Por Municipio',
    component: () => import ('../views/RoscaCasosPorMunicipio')
  },
  {
    path: '/dash/casos-curvas',
    name: 'Casos Curva',
    component: () => import('../views/CasosCurvas')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
