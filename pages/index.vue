<template>
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="page-title">
        Картины эпохи Возрождения
      </h1>

      <section v-if="goods" class="goods">
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
  async asyncData ({ app }) {
    // Имитация запроса на сервер
    const goods = await app.$axios
      .get('/data/goods.json')
      .then((response: any) => response.data)
    return { goods }
  },
  data () {
    return {
      goods: []
    }
  },
  mounted () {
    const goods = window.localStorage.getItem('goods')

    if (goods) {
      this.goods = JSON.parse(goods)
    }

    window.localStorage.setItem('goods', JSON.stringify(this.goods))
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
