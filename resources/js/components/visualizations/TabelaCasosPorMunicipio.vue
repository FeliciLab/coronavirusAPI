<template>
  <div>
    <Tabela :cities="cities"/>
  </div>
</template>

<script>
import api from '../../services/api'
import Tabela from '../misc/Tabela'
export default {
  components: {
    Tabela
  },
  data () {
    return {
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
    const cities = this.filterByDate(data, item)
    this.cities = this.orderArray(cities)
  },
  methods: {
    filterByDate (data, item) {
      return data.filter(i => {
        // eslint-disable-next-line eqeqeq
        if (item.data == i.data) {
          return i
        }
      })
    },
    orderArray (cities) {
      return cities.sort(function (a, b) {
        if (a.quantidade > b.quantidade) {
          return -1
        }
        if (a.quantidade < b.quantidade) {
          return 1
        }
        return 0
      })
    }
  }
}
</script>
