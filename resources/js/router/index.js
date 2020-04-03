import Vue from 'vue'
import VueRouter from 'vue-router'
import CasosPorDia from '../views/CasosPorDia.vue'
import TabelaCasosPorMunicipio from '../views/TabelaPorMunicipio'
import RoscaCasosPorMunicipio from '../views/RoscaCasosPorMunicipio'
import CasosCurvas from '../views/CasosCurvas'
import CurvaEpidemiologica from '../views/CurvaEpidemiologica'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dash/casos-por-dia',
    name: 'Casos por dia',
    component: CasosPorDia
  },
  {
    path: '/dash/curva-epidemiologica',
    name: 'Casos por dia',
    component: CurvaEpidemiologica
  },
  {
    path: '/dash/tabela-casos-por-municipio',
    name: 'Tabela Casos Por Municipio',
    component: TabelaCasosPorMunicipio
  },
  {
    path: '/dash/rosca-casos-por-municipio',
    name: 'rosca Casos Por Municipio',
    component: RoscaCasosPorMunicipio
  },
  {
    path: '/dash/casos-curvas',
    name: 'Casos Curva',
    component: CasosCurvas
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
