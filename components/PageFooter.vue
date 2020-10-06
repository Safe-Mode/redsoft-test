<template>
  <footer class="page-footer">
    <div class="page-footer__wrapper">
      <Logo class="page-footer__logo" />
      <MainNav class="page-footer__nav" />

      <ul class="page-footer__list">
        <li class="page-footer__item">
          <svg-icon name="phone" width="14" heigth="14" class="page-footer__icon" />
          <a href="tel:+74955555555" class="page-footer__link">+7 (495) 555-55-55</a>
        </li>

        <li class="page-footer__item">
          <svg-icon name="location" width="10" height="14" class="page-footer__icon" />
          <a href="#" class="page-footer__link">г. Москва, ул. Расплетина, 24</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/variables";
  @import "assets/styles/mixins";

  .page-footer__logo {
    margin-right: 48px;
    color: map-get(map-get($color, "primary"), "dark");
  }

  .page-footer__nav {
    margin-right: auto;
  }

  .page-footer__icon {
    margin-right: 9px;
    height: 14px;
  }

  .page-footer__link {
    @include reset-link;

    transition: color map-get($duration, "hover");

    &:hover,
    &:focus,
    &:active {
      outline: none;
      color: map-get(map-get($color, "primary"), "vivid");
    }
  }

  .page-footer__item {
    margin-right: 48px;

    &:last-child {
      margin-right: 0;
    }

    > * {
      vertical-align: middle;
    }
  }

  .page-footer__list {
    @include reset-list;

    display: flex;
  }

  .page-footer__wrapper {
    @include container;

    display: flex;
    align-items: center;
  }

  .page-footer {
    padding-top: 24px;
    padding-bottom: 24px;

    font-size: 14px;
    line-height: 150%;
    color: #555555;

    background-color: map-get($color, "footer");
  }
</style>
