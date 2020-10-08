<template>
  <div ref="layout" class="layout">
    <PageHeader ref="header" />

    <div ref="main" class="layout__main">
      <Nuxt />
    </div>

    <PageFooter ref="footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import setLayoutSizeForIE from '~/services/ie.service'

export default Vue.extend({
  mounted () {
    console.log(this.$refs.main)
    setLayoutSizeForIE(this)
  }
})
</script>

<style lang="scss">
  @import "~normalize.css";
  @import "assets/styles/variables";
  @import "assets/styles/ui/fonts";
  @import "assets/styles/blocks/page-title";
  @import "assets/styles/blocks/page-main";

  .layout__main {
    flex-grow: 1;
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: "Merriweather", "Times New Roman", serif;
    color: map-get(map-get($color, "text"), "dark");
    background-color: map-get($color, "body");
  }
</style>
