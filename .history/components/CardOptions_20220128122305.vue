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
</style>