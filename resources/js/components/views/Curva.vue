<template>
  <div class="row">
    <div class="col-12">
      <CurvaEpidemiologica v-if="data.length !=0" :data="data" :options="options"/>
    </div>
    <div class="col-12">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="legend legend-3498DB"></div>
          <span>Casos Confirmados</span>
        </div>
        <div class="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <div class="legend legend-fab822"></div>
          <span>Óbitos</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../services/api'
import CurvaEpidemiologica from '../charts/CurvaEpidemiologica'
export default {
  name: 'Home',
  components: {
    CurvaEpidemiologica
  },
  data () {
    return {
      data: [],
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    }
  },
  async created () {
    const response = await api.get('/casos-ceara-por-dia')
    const result = []
    response.data.reduce((res, value) => {
      if (!res[value.data]) {
        res[value.data] = { data: value.data, quantidade: 0, obitos: 0 }
        result.push(res[value.data])
      }
      res[value.data].quantidade += value.quantidade
      res[value.data].obitos += value.obitos
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
          backgroundColor: 'rgba(52, 152, 219, 0.2)',
          borderColor: 'rgb(52, 152, 219)'
        },
        {
          label: 'Número de óbitos',
          data: result.map(item => item.obitos),
          backgroundColor: 'rgba(250, 184, 34, 0.2)',
          borderColor: 'rgb(250,184,34)'
        }
      ]
    }
  }
}
</script>
