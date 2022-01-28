<template>
  <div>
    <div class="container">
      <header>
        <h1> Account balance </h1>
        <img src="~assets/icons/GreenLogo.svg" alt="Aspire" />
      </header>
      <div class="balance-details">
        <div class="balance-wrapper">
          <div class="currency">S$</div>
          <div class="balance">3,000</div>
        </div>
        <new-card />
      </div>
      <b-tabs>
        <b-tab title="My debit cards">
            <app-card 
              :cards="getDebitCards"
            />
        </b-tab>
        <b-tab title="My company cards">
            <app-card 
              :cards="getDebitCards"
            />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppCard from '@/components/AppCard'
import NewCard from '@/components/NewCard'

export default {
  name: 'AppCards',
  components: {
    AppCard,
    NewCard
  },
  computed: {
    ...mapState([
      'cards',
    ]),
    getDebitCards () {
      const cards = []
      this.cards.forEach((card) => {
        cards.push({exactNum: this.getN(card.fullNumber.toString()), ...card })
      })
      return cards
    }
  },
  methods: {
    getN(n) {
      if (!n || typeof n === 'number') {
        return ''
      }
      const val = n.split('')
      const nums = []
      let newval = ''
      for (let i = 0; i < val.length; i++) {
        if (i % 4 === 0 && i > 0) {
          newval = newval.concat(' ')
          nums.push(newval)
          newval = ''
        }
        newval = newval.concat(val[i]);
      }
      return nums
    }
  }
}
</script>

<style lang="scss">
.container{
  padding-left: $standard;
}
header{
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 14px;
  font-weight: 300;
}
img {
  width: 25px;
  height: 25px;
}
.currency{
  background: $green-color;
  width: 40px;
  height: 22px;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  line-height: 23px;
}
.balance-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;

}
.balance-details{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.balance{
  font-size: $standard;
  font-weight: bold;
  padding-left: 10px;
}
.new-card{
  font-size: 13px;
  color: $blue-color;
}
.tabs{
  padding-top: 30px;
  .nav-tabs{
    border: 0;
  }
  .nav-tabs .nav-link{
    color: $white;
    font-size: 13px;
    padding: 5px;
    margin-right: 10px;
  }
  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border: 0;
  }
  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    background: transparent;
    border: 0;
    border-bottom: 2px solid $blue-color;
    color: $white;
    font-weight: bold;
  }
  .tab-content{
    padding: 20px 0;
  }
}
</style>