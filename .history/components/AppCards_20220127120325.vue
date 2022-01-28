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
      <div class="tabs">
        <div class="tab" active>
          <div class="tab-1">My debit cards</div>
          <div class="tab-2">All company cards</div>
        </div>
        <div class="tab-content">
          <div class="tab-1-content">
            <app-card />
          </div>
          <div class="tab-2-content">
            <app-card />
          </div>
        </div>
      </div>
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
  padding-top: 20pt;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 14pt;
  font-weight: 300;
}
img {
  width: 25px;
  height: 25px;
}
.currency{
  background: $green-color;
  width: 40pt;
  height: 22pt;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  font-size: 12pt;
  font-weight: bold;
  line-height: 28px;
}
.balance-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
}
.balance-details{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.balance{
  font-size: 24pt;
  font-weight: bold;
}
.new-card{
  font-size: 13pt;
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