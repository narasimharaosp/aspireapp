<template>
  <div>
    <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="#">Logo</a>

      <!-- Links -->
      <div id="nav-content" class="collapse navbar-collapse">
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
        </ul>
      </div>
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

</style>