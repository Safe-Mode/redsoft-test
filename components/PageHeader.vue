<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <Logo />
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/mixins";

  .page-header__wrapper {
    @include container;
  }

  .page-header {
    border-bottom: 1px solid #e1e1e1;
  }
</style>
