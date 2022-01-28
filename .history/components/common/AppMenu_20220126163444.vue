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
$green-color: #01D167;
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
.nav-link{
  font-family: 'Open Sans, Regular';
  font-size: 9pt;
  color: #DDDDDD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 24pt;
    height: 18pt;
  }
}
.nav-link.active {
  color: $green-color;
}
</style>