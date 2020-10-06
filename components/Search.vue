<template>
  <div class="search">
    <form class="search__form form">
      <div class="form__row">
        <div class="form__control form__control--paired">
          <label for="search" class="form__label form__label--hidden">Поиск по названию картины</label>
          <input id="search" type="search" class="form__input" placeholder="Поиск по названию картины">
        </div>

        <button class="form__btn btn" type="submit">
          Найти
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/ui/btn";
  @import "assets/styles/ui/form";

  .search__form {
    width: 100%;
  }
</style>
