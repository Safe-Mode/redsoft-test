<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item">
        <nuxt-link to="/" class="main-nav__link">
          Каталог
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link to="/delivery" class="main-nav__link">
          Доставка
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link to="/payment" class="main-nav__link">
          Оплата
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link to="/contacts" class="main-nav__link">
          Контакты
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link to="/about" class="main-nav__link">
          О галерее
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/variables";
  @import "assets/styles/mixins";

  .main-nav__link {
    @include reset-link;

    font-size: 14px;
    line-height: 150%;
    transition: color map-get($duration, "hover");

    &:hover,
    &:focus,
    &:active {
      outline: none;
      color: map-get(map-get($color, "primary"), "vivid");
    }
  }

  .main-nav__item {
    margin-right: 48px;

    &:last-child {
      margin-right: 0;
    }
  }

  .main-nav__list {
    @include reset-list;
    display: flex;
  }
</style>
