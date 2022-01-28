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
    </div>
  </div>
</template>

<script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'Cards'
  }
</script>

<style lang="scss" scoped>
header{
  padding-top: 20pt;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-family: 'Open Sans';
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
  font-family: 'Open Sans';
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
</style>