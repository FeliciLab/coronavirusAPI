<template>
    <div class="row card">
        <div class="col-12 col-md-4">
            <TabelaCasosPorMunicipio />
        </div>
        <!-- <div class="col-12 col-md-8"></div> -->
    </div>
</template>

<script>
import api from '@/services/api'
export default {
  data () {
    return {
      cities: []
    }
  },
  async mounted () {
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
