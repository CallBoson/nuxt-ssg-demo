export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HOLAX—以用户需求为中心的创造者平台',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'body-class'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'HOLAX是一个以用户为中心的创造者平台。HOLAX平台集结国内外多个科学家、实验室，汇聚全球TOP产品设计团队，联合强大的供应链体系，HOLAX志在为用户提供更优质、更具创意的品质好物！' },
      { name: 'keywords', content: 'HOLAX，HOLAX平台' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/methods',
    '@/plugins/axios',
    '@/plugins/filter',
    '@/plugins/disable-scale'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],

  proxy: {
    '/api': {
      target: 'http://192.168.0.6:8094',
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  axios: {
    proxy: true,
    // prefix: '/api',
    // baseURL: process.env.HOST
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
