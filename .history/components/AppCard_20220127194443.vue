<template>
  <div class="cards-carousel">
    <div class="show-card-wrapper">
      <div class="show-card">
        <img src="~assets/icons/showcard.svg" alt="Show card number">
        Show card number
      </div>
    </div>
    <b-carousel
      id="carousel-1"
      :interval="0"
      indicators
      fade
    >
      <b-carousel-slide v-for="card in cards" :key="card.lastNumber" img-blank :img-alt="card.name" :class="card.type">
        <div class="container card-info">
          <div class="row logo">
            <div class="col">
              <img src="~assets/icons/AspireLogo.svg" alt="AspireLogo">
            </div>
          </div>
          <div class="row name">
            <div class="col">
              <h1>{{ card.name }}</h1>
            </div>
          </div>
          <div class="row card-number">
            <div class="col">
              <div v-for="i in 3" :key="i" class="four-dots">
                <span v-for="index in 4" :key="index"/>
              </div>
              <h2>{{ card.lastNumber }}</h2>
            </div>
          </div>
        </div>
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
            fullNumber: '1233 4444 5555 4040',
            lastNumber: '4040',
            type: 'visa',
            name: 'Mark Henry',
            validity: '12/23',
            cvv: '***',
          },
          {
            fullNumber: '1233 4444 5555 3322',
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
// padding-top: 30px;
.show-card-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.show-card {
  width: 151px;
  height: 40px;
  font-size: 12px;
  background: $white;
  color: $green-color;
  display: flex;
  justify-content: center;
  /* align-items: start; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  z-index: 0;
  top: 10px;
  line-height: 28px;
  img{
    width: 16px;
    height: 16px;
    margin-right: 5px;
    margin-top: 6px;
  }
}
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
.card-info{
  text-align: left;
  .row {
    padding-left: 20px;
  }
  .logo{
    .col {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-right: 24px;
    }
    img {
      width: 74px;
      height: 21px;
    }
  }
  .name {
    padding-top: 20px;
    h1 {
      font-size: 22px;
      font-weight: 400;
    }
  }
  .card-number{
    padding-top: 20px;
    .col{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    
    h2 {
      width: 60px;
      font-size: 14px;
    }
    .four-dots{
      width: 60px;
      span {
        height: 8px;
        width: 8px;
        background-color: $white;
        border-radius: 50%;
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
}
.carousel-caption {
  position: absolute;
  right: 0;
  top: 20px;
  width: 100%;
  height: auto;
  left: 0;
  z-index: 10;
  padding: 0;
}
</style>