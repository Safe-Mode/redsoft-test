<template>
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="page-title">
        Картины эпохи Возрождения
      </h1>

      <section class="goods">
        <ul class="goods__list">
          <li v-for="(product, i) in goods" :key="i" class="goods__item">
            <Product :product="product" />
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData () {
    const goods = [{
      title: 'Рождение Венеры',
      author: 'Сандро Боттичелли',
      price: {
        default: 2000000,
        discount: 1000000
      },
      image: '/images/1.jpg',
      isSoldOut: false
    }, {
      title: 'Тайная вечеря',
      author: 'Леонардо да Винчи',
      price: {
        default: 3000000,
        discount: null
      },
      image: '/images/2.jpg',
      isSoldOut: false
    }, {
      title: 'Сотворение Адама',
      author: 'Микеланджело',
      price: {
        default: 6000000,
        discount: 5000000
      },
      image: '/images/3.jpg',
      isSoldOut: false
    }, {
      title: 'Урок анатомии',
      author: 'Рембрандт',
      price: {
        default: 6000000,
        discount: 5000000
      },
      image: '/images/4.jpg',
      isSoldOut: true
    }]

    return { goods }
  }
})
</script>

<style lang="scss">
  @import "assets/styles/mixins";
  @import "assets/styles/blocks/page-title";
  @import "assets/styles/blocks/page-main";

  .goods__item {
    margin: 16px;
    max-width: 280px;
  }

  .goods__list {
    @include reset-list;

    display: flex;
    flex-wrap: wrap;
    margin: -16px;
  }
</style>
