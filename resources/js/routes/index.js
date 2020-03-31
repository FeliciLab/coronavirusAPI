import Vue from 'vue'
import VueRouter from 'vue-router'
import Curva from '../components/views/Curva.vue'
import RoscaCasosPorMunicipio from '../components/views/RoscaCasosPorMunicipio.vue'
import Tabela from '../components/views/Tabela.vue'
import CasosPorDia from '../components/views/CasosPorDia.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Curva Epidemiologica',
    component: Curva
  },
  {
    path: '/rosca-casos-por-municipio',
    name: 'RoscaCasosPorMunicipio',
    component: RoscaCasosPorMunicipio
  },
  {
    path: '/tabela-casos-por-municipio',
    name: 'Tabela',
    component: Tabela
  },
  {
    path: '/casos-por-dia',
    name: 'CasosPorDia',
    component: CasosPorDia
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
