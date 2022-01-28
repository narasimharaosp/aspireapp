<template>
  <div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="~assets/icons/Freezecard.svg" alt="Freeze card"/>
          Freeze card
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <img src="~assets/icons/Setspendlimit.svg" alt="Set spend limit"/>
          Set spend limit
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="~assets/icons/GPay.svg" alt="Add to GPay"/>
          Add to GPay
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="~assets/icons/Replacecard.svg" alt="Replace card"/>
          Replace card
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="~assets/icons/Deactivatecard.svg" alt="Cancel card"/>
          Cancel card
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CardTransactions',
  props: {
    transactions: {
      type: Array,
      default: () => []
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