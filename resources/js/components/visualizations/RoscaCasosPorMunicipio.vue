<template>
<div class="row" v-if="data.length != 0">
  <div class="col-12">
    <Doughnut :data="data"/>
  </div>
  <div class="col-12 mt-3">
    <div class="row justify-content-center" v-for="(item, index) in cities" :key="item.municipio">
      <div class="col-6 d-flex align-items-center justify-content-start">
        <div class="d-flex w-100 ml-5 ml-md-0 justify-content-md-center">
          <div class="legend legend-3498DB" :class="[`legend-${classes[index]}`]"></div>
          <span>{{ item.municipio }}</span>
        </div>
      </div>
      <div class="col-6 text-center">
        {{ item.quantidade }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Doughnut from '../charts/Doughnut'
import { colors, sortByQuantity, filterByDate } from '../../helpers.js'
import api from '../../services/api'
export default {
  components: {
    Doughnut
  },
  data () {
    return {
      classes: colors.map(color => color.class),
      colors: colors.map(color => color.hex),
      data: [],
      cities: []
    }
  },

  async created () {
    const response = await api.get('/casos-ceara-por-dia')
    let item = null
    const data = response.data
    item = data.reduce((a, b) => {
      return new Date(a.data) > new Date(b.data) ? a : b
    })
    let citiesArr = filterByDate(data, item)
    citiesArr = sortByQuantity(citiesArr)
    this.cities = citiesArr
    this.data = {
      labels: citiesArr.map(item => item.municipio),
      datasets: [
        {
          label: 'Número de Casos Confirmados',
          data: citiesArr.map(item => item.quantidade),
          backgroundColor: colors.map(color => color.hex),
          borderWidth: 0
        }
      ]
    }
  }
}
</script>
