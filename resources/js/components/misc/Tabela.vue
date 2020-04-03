<template>
    <div class="m-3 p-3">
        <table class="table">
            <tbody>
                <tr>
                  <td class="font-weight-bold">Município</td>
                  <td class="font-weight-bold text-right">QTD. de Casos</td>
                </tr>
                <tr v-for="city in cities" :key="city.municipio">
                    <td>{{ city.municipio }}</td>
                    <td class="text-right font-weight-bold">{{ city.quantidade }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  props: ['cities']
}
</script>
