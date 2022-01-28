<template>
  <div>
    <div class="container">
      <header>
        <img src="~assets/icons/GreenLogo.svg" alt="Aspire" />
      </header>
      <h1> Account balance </h1>
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
</style>