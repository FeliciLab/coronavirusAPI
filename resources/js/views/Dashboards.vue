<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Indicators />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CasosPorMunicipio />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="p-3">
          <CurvaEpidemiologica />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="p-3">
          <CasosPorDia />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CasosPorDia from '../components/visualizations/CasosPorDia'
import CurvaEpidemiologica from '../components/visualizations/CurvaEpidemiologica'
import CasosPorMunicipio from '../components/visualizations/CasosPorMunicipio'
import Indicators from '../components/visualizations/Indicators'
export default {
  components: {
    Indicators,
    CasosPorDia,
    CurvaEpidemiologica,
    CasosPorMunicipio
  }
}
</script>
