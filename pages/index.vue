<template>
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="page-title">
        Картины эпохи Возрождения
      </h1>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
  @import "~normalize.css";
  @import "assets/styles/mixins";

  .page-main__wrapper {
    @include container;
  }

  .page-main {
    flex-grow: 1;
  }
</style>
