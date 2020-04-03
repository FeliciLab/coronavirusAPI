<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data'],
  data () {
    return {
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
