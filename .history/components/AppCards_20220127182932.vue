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
        <div class="new-card">
          <img src="~assets/icons/box.svg" alt="new card" />
          New card
        </div>
      </div>
      <b-tabs>
        <b-tab title="My debit cards">
            <app-card />
        </b-tab>
        <b-tab title="My company cards">
            askdjlaksjdklj
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'

export default {
  name: 'AppCards',
  components: {
    AppCard
  }
}
</script>

<style lang="scss">
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
  font-size: 24px;
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
    padding: 5px;
    margin-right: 30px;
  }
  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
    background: transparent;
    border: 0;
    border-bottom: 2px solid $blue-color;
    color: $white;
  }
  .tab-content{
    padding: 20px 0;
  }
}
</style>