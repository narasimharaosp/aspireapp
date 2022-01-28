<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Logo.svg" alt="Home"/>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/pay.svg" alt="Home"/>
            Cards
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Payments.svg" alt="Home"/>
            Payments
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Payments.svg" alt="Home"/>
            Payments
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Payments.svg" alt="Home"/>
            Payments
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'Cards'
  }
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
ul.navbar-nav{
  width: 100%;
  height: 56pt;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  li{
    display: inline-block;
  }
}
</style>