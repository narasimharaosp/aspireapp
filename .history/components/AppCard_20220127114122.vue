<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'AppCard',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = false
      },
      onSlideEnd(slide) {
        this.sliding = false
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
</style>