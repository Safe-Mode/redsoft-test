export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'redsoft-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/svg4everybody.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'vue-currency-filter/nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  svgSprite: {
    input: '~/assets/icons',
    output: '~/assets/icons/sprite'
  },

  currencyFilter: {
    symbol: '$',
    thousandsSeparator: ' ',
    fractionCount: 0,
    fractionSeparator: '.',
    symbolPosition: 'back',
    symbolSpacing: true,
    avoidEmptyDecimals: undefined
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
