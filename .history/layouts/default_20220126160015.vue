<template>
  <div class="content">
    <Nuxt />
    <AppMenu />
  </div>
</template>

<script>
  // eslint-disable-next-line vue/multi-word-component-names
  import AppMenu from '@/components/AppMenu.vue'
  export default {
    components: {
      AppMenu
    }
  }
</script>

<style lang="scss" scoped>
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
}
</style>