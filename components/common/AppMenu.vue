<template>
  <div class="menu">
    <nav class="navbar">
      <!-- Links -->
      <div class="main-logo">
        <img src="~assets/icons/MainLogo.svg" alt="Aspire" />
        <div class="main-description">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Logo.svg" alt="Home"/>
            <div class="link-name">Home</div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            <img src="~assets/icons/pay.svg" alt="Cards"/>
            <div class="link-name">Cards</div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Payments.svg" alt="Payments"/>
            <div class="link-name">Payments</div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Credit.svg" alt="Credit"/>
            <div class="link-name">Credit</div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="~assets/icons/Account.svg" alt="Profile"/>
            <div class="link-name">Profile</div>
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
.menu {
  @include sm{
    padding-left: 48px;
    padding-top: 48px;
  }
}
.navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -3pt #00000014;
  background: $white;
  z-index: 2;
  @include sm{
    position: static;
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: transparent;
    box-shadow: none;
  }
}
.main-logo {
  display: none;
  @include sm{
    display: block;
    width: 100%;
    img {
      width: 125px;
      height: 35px;
    }
    .main-description {
      width: 237px;
      padding-top: 19px;
      font-size: 15px;
    }
  }
}
.navbar-nav{
  width: 100%;
  padding: 0 $standard;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @include sm{
    flex-direction: column;
    height: auto;
    padding: 0;
    padding-top: 80px;
  }
  li{
    display: inline-block;
    @include sm{
      width: 100%;
      padding-top: 60px;
      &:first-child{
        padding-top: 0;
      }
    }
  }
}
.nav-link{
  font-size: 9px;
  color: #DDDDDD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include sm{
    flex-direction: row;
    justify-content: flex-start;
  }
  img {
    width: $standard;
    height: $standard;
  }
  .link-name{
    @include sm{
      padding-left: 16px;
      font-size: 16px;
    }
  }
}
.nav-link.active {
  color: $green-color;
}
</style>