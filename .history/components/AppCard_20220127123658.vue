<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      indicators
    >
      <b-carousel-slide v-for="card in cards" :key="card.lastNumber" img-blank :img-alt="card.name" :class="card.type">
        <p>
          {{card}}
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'AppCard',
    data() {
      return {
        slide: 0,
        sliding: null,
        cards: [
          {
            lastNumber: '4040',
            type: 'visa',
            name: 'Mark Henry',
            validity: '12/23',
            cvv: '***',
          },
          {
            lastNumber: '3322',
            type: 'master',
            name: 'John Doe',
            validity: '12/25',
            cvv: '***'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
.carousel-indicators{
  top: 200px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    border: 0;
    &.active {
      width: 16px;
      background: $green-color;
    }
  }
}
.tab-content{
  .carousel-item{
    border-radius: 10px;
    width: 358px;
    height: 220px;
  }
  .visa{
    background: $green-color;
  }
  .master {
    background: $black;
  }
}
</style>