<template>
  <div>
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 5</a>
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