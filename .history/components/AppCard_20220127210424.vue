<template>
  <div class="cards-carousel">
    <div class="show-card-wrapper">
      <div class="show-card" @click="showCard">
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
      <b-carousel-slide v-for="card in getCards()" :key="card.lastNumber" img-blank :img-alt="card.name" :class="card.type">
        <div class="container-fluid card-info">
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
            <div v-if="!showCardNumber" class="col">
              <div v-for="i in 3" :key="i" class="four-dots">
                <span v-for="index in 4" :key="index"/>
              </div>
              <div class="last-number">{{ card.lastNumber }}</div>
            </div>
            <div v-else-if="card.fullNumber" class="col">
              <div class="full-number">{{ card.exactNum[0] }}</div>
              <div class="full-number">{{ card.exactNum[1] }}</div>
              <div class="full-number">{{ card.exactNum[2] }}</div>
              <div class="full-number">{{ card.lastNumber }}</div>
            </div>
          </div>
          <div class="row validity-row">
            <div class="col">
              <div class="validity">Thru: {{ card.validity }}</div>
              <div class="cvv">CVV:</div>
              <div class="stars">&nbsp;***</div>
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
        showCardNumber: false,
        cards: [
          {
            fullNumber: '1233444455554040',
            lastNumber: '4040',
            type: 'visa',
            name: 'Mark Henry',
            validity: '12/23',
            cvv: '***',
          },
          {
            fullNumber: 4000900090003322,
            lastNumber: 3322,
            type: 'master',
            name: 'John Doe',
            validity: '12/25',
            cvv: '***'
          }
        ]
      }
    },
    methods: {
      getCards () {
        const cards = []
        this.cards.forEach((card) => {
          let strNum = card.fullNumber
          if (strNum === 'number') {
            strNum += ''
          }
          cards.push({exactNum: this.getN(strNum), ...card })
        })
        return cards
      },
      showCard () {
        this.showCardNumber = !this.showCardNumber
      },
      getN(n) {
        if (!n || typeof n === 'number') {
          return ''
        }
        return n.split(/(?<=^(.{4})+)(?!$)/)
      }
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
  cursor: pointer;
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
  cursor: pointer;
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
    padding-left: 10px;
  }
  .logo{
    .col {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-right: $standard;
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
    letter-spacing: 3.5px;
    padding-top: 20px;
    .col{
      display: flex;
      justify-content: space-between;
      max-width: 90%;
    }
    .four-dots{
      span {
        height: 8px;
        width: 8px;
        background-color: $white;
        border-radius: 50%;
        display: inline-block;
        margin-left: 5px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .last-number, .full-number {
      font-size: 14px;
      line-height: 25px;
    }
  }
  .validity-row {
    padding: 19px;
    font-size: 13px;
    font-weight: 400;
    .col{
      display: flex;
      justify-content: flex-start;
    }
    .cvv {
      padding-left: $standard;
    }
    .stars{
      font-size: 24px;
      line-height: 32px;
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