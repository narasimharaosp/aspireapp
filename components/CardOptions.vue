<template>
  <div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <div class="nav-link" @click="freezeCard">
          <img src="~assets/icons/Freezecard.svg" alt="Freeze card"/>
          {{ frozen ? 'Unfreeze card' : 'Freeze card' }}
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link active">
          <img src="~assets/icons/Setspendlimit.svg" alt="Set spend limit"/>
          Set spend limit
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link">
          <img src="~assets/icons/GPay.svg" alt="Add to GPay"/>
          Add to GPay
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link">
          <img src="~assets/icons/Replacecard.svg" alt="Replace card"/>
          Replace card
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link" @click="showModal">
          <img src="~assets/icons/Deactivatecard.svg" alt="Cancel card"/>
          Cancel card
        </div>
      </li>
    </ul>
    <b-modal
      ref="cancel-modal"
      title="Are you sure you want to cancel card?"
      @ok="cancelCard"
    >
      <div><b>Name:</b> {{ cardName }}</div>
      <div><b>Card Number:</b> {{ cardNumber }}</div>
    </b-modal>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CardTransactions',
  props: {
    cardIndex: {
      type: Number,
      default: () => 0
    },
    cardName: {
      type: String,
      default: () => ''
    },
    cardNumber: {
      type: Number,
      default: () => null
    },
    frozen: {
      type: Boolean,
      default: () => false
    },
    transactions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations([
      'freezeCard'
    ]),
    freezeCard () {
      if (this.cardIndex === undefined || this.frozen === undefined) {
        return
      }
      const data = { index: this.cardIndex, state: !this.frozen}
      this.$store.commit('freezeCard', data)
    },
    cancelCard () {
      if (this.cardIndex === undefined) {
        return
      }
      const data = { index: this.cardIndex }
      this.$store.commit('cancelCard', data)
    },
    showModal () {
      this.$refs['cancel-modal'].show()
    }
  }
}
</script>
<style lang="scss">
ul.navbar-nav{
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  li{
    display: inline-block;
  }
}
.nav-link{
  text-align: center;
  color: $dark-blue;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>