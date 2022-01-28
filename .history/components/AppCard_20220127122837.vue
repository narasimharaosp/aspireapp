<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="0"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="card in cards" :key="card.lastNumber" img-blank :img-alt="card.name">
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
      onSlideStart(slide) {
        this.sliding = false
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      getClassName (type) {
        return type
      }
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