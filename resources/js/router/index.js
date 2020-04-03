import Vue from 'vue'
import VueRouter from 'vue-router'
// import CasosPorDia from '../views/CasosPorDia.vue'
// import TabelaCasosPorMunicipio from '../views/TabelaPorMunicipio'
// import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio'
// import CasosEpidemiologicos from '../views/CasosEpidemiologicos'
Vue.use(VueRouter)

const routes = [
  {
    path: '/graphic/casos-por-dia',
    name: 'Casos por dia',
    component: () => import ('../views/CasosPorDia')
  },
  {
    path: '/graphic/tabela-casos-por-municipio',
    name: 'Tabela Casos Por Municipio',
    component: () => import ('../views/TabelaPorMunicipio')
  },
  {
    path: '/graphic/rosca-casos-por-municipio',
    name: 'rosca Casos Por Municipio',
    component: () => import ('../views/RoscaCasosPorMunicipio')
  },
  {
    path: '/graphic/casos-epidemiologicos',
    name: 'Casos Epidemiologicos',
    component: () => import('../views/CasosEpidemiologicos')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
