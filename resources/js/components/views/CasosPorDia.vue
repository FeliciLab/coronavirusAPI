<template>
  <div class="row">
    <div class="col-12">
      <CasosPorDia/>
    </div>
    <div class="col-12">
      <div class="row d-flex justify-content-center">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="legend legend-3498DB"></div>
          <span>Novos Casos por dia</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CasosPorDia from '../charts/CasosPorDia'
export default {
  components: {
    CasosPorDia
  }
}
</script>
