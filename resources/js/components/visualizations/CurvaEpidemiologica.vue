<template>
  <div class="row">
    <div class="col-12">
      <ChartLine v-if="data.length !=0" :data="data"/>
    </div>
    <div class="col-12">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="legend legend-e02b20"></div>
          <span>Casos Confirmados</span>
        </div>
        <!-- <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="legend legend-6f6f6f"></div>
          <span>Óbitos</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../services/api'
import ChartLine from '../charts/Line.vue'
import { orderByDate } from '../../helpers'
export default {
  name: 'Home',
  components: {
    ChartLine
  },
  data () {
    return {
      data: []
    }
  },
  async created () {
    const response = await api.get('/casos-ceara-por-dia')
    const result = []
    const data = orderByDate(response.data)
    data.reduce((res, value) => {
      if (!res[value.data]) {
        res[value.data] = { data: value.data, quantidade: 0 }
        result.push(res[value.data])
      }
      res[value.data].quantidade += value.quantidade
      // res[value.data].obitos += value.obitos
      return res
    }, {})
    this.data = {
      labels: result.map(item => {
        const splitted = item.data.split('-')
        return `${splitted[2]}/${splitted[1]}`
      }),
      datasets: [
        {
          label: 'Número de Casos Confirmados',
          data: result.map(item => item.quantidade),
          backgroundColor: 'rgba(224, 43, 32, 0.2)',
          borderColor: 'rgb(224, 43, 32)'
        },
        {
          label: 'Número de óbitos',
          data: result.map(item => item.obitos),
          backgroundColor: 'rgba(111, 111, 111, 0.2)',
          borderColor: 'rgb(111,111,111)'
        }
      ]
    }
  }
}
</script>
