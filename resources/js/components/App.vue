<template>
<div id="app">
    <Curva />
    <CasosPorDia />
</div>
</template>
<script>
import CasosPorDia from './views/CasosPorDia'
import Curva from './views/Curva'
export default {
    components: {
        Curva,
        CasosPorDia
    }
}
</script>

