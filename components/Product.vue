<template>
  <article class="product" :class="{ 'product--sold': product.isSoldOut }">
    <header class="product__header">
      <img :src="product.image" :alt="product.title" class="product__image">
    </header>

    <div class="product__body">
      <h3 class="product__title">
        &laquo;{{ product.title }}&raquo;<br>
        {{ product.author }}
      </h3>

      <div v-if="!product.isSoldOut" class="product__footer">
        <div class="product__price" :class="{ 'product__price--discount': product.price.discount }">
          <span class="product__default">{{ product.price.default | currency }}</span>
          <span v-if="product.price.discount" class="product__discount">{{ product.price.discount | currency }}</span>
        </div>

        <button class="btn product__btn" type="submit">
          Купить
        </button>
      </div>

      <p v-else class="product__footer">
        Продана на аукционе
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "assets/styles/variables";
  @import "assets/styles/ui/btn";

  .product__header {
    box-sizing: border-box;
    min-height: 160px;
    border-bottom: 1px solid map-get(map-get($color, "border"), "light");
  }

  .product__title {
    margin: 0;
    margin-bottom: 22px;

    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
  }

  .product__price {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;

    &--discount {
      .product__default {
        font-weight: 300;
        font-size: 14px;
        color: #a0a0a0;
        text-decoration: line-through;
      }
    }

    span {
      display: block;
    }
  }

  .product__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
    padding-top: 20px;
  }

  .product {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 328px;
    border: 1px solid map-get(map-get($color, "border"), "light");

    &--sold {
      opacity: 0.5;

      .product__footer {
        margin: auto 0;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
      }
    }
  }
</style>
