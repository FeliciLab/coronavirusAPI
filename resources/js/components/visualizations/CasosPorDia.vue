<template>
  <div class="row">
    <div class="col-12">
      <ChartLine v-if="data.length !=0" :data="data"/>
    </div>
    <div class="col-12">
      <div class="row d-flex justify-content-center">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="legend legend-e02b20"></div>
          <span>Novos Casos por dia</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChartLine from '../charts/Line'
import api from '../../services/api'
import { orderByDate } from '../../helpers'
export default {
  components: {
    ChartLine
  },
  data () {
    return {
      data: []
    }
  },
  async created () {
    const response = await api.get('/casos-novos-ceara-por-dia')
    const data = orderByDate(response.data)
    this.data = {
      labels: data.map(item => {
        const splitted = item.data.split('-')
        return `${splitted[2]}/${splitted[1]}`
      }),
      datasets: [
        {
          label: 'Novos casos por dia',
          data: data.map(item => item.qtdnovoscasos),
          backgroundColor: 'rgba(224, 43, 32, 0.2)',
          borderColor: 'rgb(224, 43, 32)'
        }
      ]
    }
  }
}
</script>
