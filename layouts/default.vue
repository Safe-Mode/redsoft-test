<template>
  <div class="layout">
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<style lang="scss">
  @import "~normalize.css";
  @import "assets/styles/variables";
  @import "assets/styles/ui/fonts";

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
