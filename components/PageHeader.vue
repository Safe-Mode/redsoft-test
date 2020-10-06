<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <Logo class="page-header__logo" />
      <MainNav class="page-header__nav" />
      <Search class="page-header__search" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/variables";
  @import "assets/styles/mixins";

  .page-header__logo {
    margin-right: 48px;
    color: map-get(map-get($color, "primary"), "mid");
  }

  .page-header__nav {
    margin-right: auto;
  }

  .page-header__search {
    flex-grow: 1;
    max-width: 412px;
  }

  .page-header__wrapper {
    @include container;

    display: flex;
    align-items: center;
  }

  .page-header {
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e1e1e1;
  }
</style>
