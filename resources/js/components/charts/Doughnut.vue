<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: ['data'],
  data () {
    return {
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
          segmentShowStroke: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
