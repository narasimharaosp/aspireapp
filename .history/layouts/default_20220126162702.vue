<template>
  <div class="content">
    <Nuxt />
    <AppMenu />
  </div>
</template>

<script>
  import AppMenu from '~/components/common/AppMenu.vue'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Default',
    components: {
      AppMenu
    }
  }
</script>

<style lang="scss" scoped>
$green-color: '#01D167';
html {
  font-family:
    sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>