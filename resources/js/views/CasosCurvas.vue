<template>
    <div>
        <CasosPorDia />
        <CurvaEpidemiologica />
    </div>
</template>
<script>
import CasosPorDia from '../components/visualizations/CasosPorDia'
import CurvaEpidemiologica from '../components/visualizations/CurvaEpidemiologica'
export default {
  components: {
    CasosPorDia,
    CurvaEpidemiologica
  }
}
</script>
