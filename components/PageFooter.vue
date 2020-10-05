<template>
  <footer class="page-footer">
    <div class="page-footer__wrapper">
      <Logo />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/mixins";

  .page-footer__wrapper {
    @include container;
  }
</style>
