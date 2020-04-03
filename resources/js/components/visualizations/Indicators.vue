<template>
    <div>
        <div class="row">
          <div class="col-12 col-md-3 p-3">
            <CardNumber number="401" text="casos confirmados" subtext="2.54% 🠉" type-of-card="confirmed" :img="require('@/assets/images/confirmados.png')"/>
          </div>
          <div class="col-12 col-md-3 p-3">
            <CardNumber text="casos recuperados" subtext="-" type-of-card="recovered" :img="require('@assets/images/recuperados.png')"/>
          </div>
          <div class="col-12 col-md-3 p-3">
            <CardNumber number="7" text="Óbitos" subtext="98% 🠉" type-of-card="deaths" :img="require('@/assets/images/obitos.png')"/>
          </div>
          <div class="col-12 col-md-3 p-3">
            <CardNumber number="359" subtext="5.4% 🠉" text="Casos Internados" type-of-card="generic" :img="require('@/assets/images/internados.png')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-3 p-3">
            <CardNumber card="mini" number="17" text="Internados em UTI" subtext="63% dos internatos" type-of-card="generic"/>
          </div>
          <div class="col-12 col-md-3 p-3">
            <CardNumber card="mini" number="327" text="internados em enfermaria" subtext="37% dos internatos" type-of-card="generic"/>
          </div>
          <div class="col-12 col-md-3 p-3">
            <CardNumber card="mini" number="11.5%" text="Isolamento domiciliar" subtext="91% dos confirmados" type-of-card="generic"/>
          </div>
          <div class="col-12 col-md-3 p-3">
            <CardNumber card="mini" number="500" text="Variação no número de casos nas últimas 24H" type-of-card="generic"/>
          </div>
        </div>
    </div>
</template>

<script>
import CardNumber from '@/components/misc/CardNumber'
export default {
  components: {
    CardNumber
  }
}
</script>
