<template>
  <div>
    <nav class="navbar">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Logo.svg" alt="Home"/>
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <img src="~assets/icons/pay.svg" alt="Cards"/>
            Cards
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Payments.svg" alt="Payments"/>
            Payments
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Credit.svg" alt="Credit"/>
            Credit
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Account.svg" alt="Profile"/>
            Profile
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
  box-shadow: 0 -3pt #00000014;
  background: $white;
  z-index: 2;
}
ul.navbar-nav{
  width: 100%;
  padding: 0 $standard;
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
  font-size: 9px;
  color: #DDDDDD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: $standard;
    height: $standard;
  }
}
.nav-link.active {
  color: $green-color;
}
</style>