<template>
    <div class="card m-3 p-3 indicators" :class="card">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <img class="responsive icon" :src="img" alt=""/>
            </div>
            <div class="col-12">
                <p class="number text-center">{{ number? number: '-' }}</p>
            </div>
            <div class="col-12">
                <p class="text-center card-text" :class="classes[typeOfCard]">{{ text }}</p>
            </div>
            <div class="col-12 mt-1">
                <p class="text-center sub-text">{{ subtext }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .mini {
        height: 100%;
        max-height: 220px;
    }

    .number {
        font-size: 50px;
        font-family: 'Nunito Bold';
        font-weight: bold;
    }

    .icon {
        max-width: 96px;
        max-height: 96px;
    }

    .card-text {
        font-size: 16px;
        text-transform: uppercase;
        font-family: 'Nunito Bold';
        font-weight: bold;
    }

    .sub-text {
        color: #9E9E9E;
        font-weight: bold;
        font-family: 'Nunito Bold';
        font-size: 16px;
        text-transform: uppercase;
    }

    .text-generic {
        color: #FF9800;
    }

    .text-deaths {
        color: #000000;
    }

    .text-recovered {
        color: #4CAF50;
    }

    .text-confirmed {
        color: #F44336;
    }

</style>

<script>
export default {
  props: ['number', 'text', 'subtext', 'typeOfCard', 'img', 'card'],
  data () {
    const classes = {
      generic: 'text-generic',
      deaths: 'text-deaths',
      recovered: 'text-recovered',
      confirmed: 'text-confirmed'
    }
    return {
      classes
    }
  }
}
</script>
