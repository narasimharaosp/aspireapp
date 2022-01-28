<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Payments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Credit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
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
  @media(min-width: 768px) {
    height: auto;
    flex-direction: column;
  }
}
</style>