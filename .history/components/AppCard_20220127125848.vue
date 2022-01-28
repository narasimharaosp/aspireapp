<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="0"
      indicators
      fade
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
  top: 250px;
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
  .tab-pane {
    margin: 0 auto;
    max-width: 360px;
  }
  .carousel-item{
    border-radius: 10px;
    max-width: 360px;
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