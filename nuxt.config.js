export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-keycloak',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://localhost:8080',
    browserBaseURL: 'https://localhost:8080',
    proxyHeaders: true,
    proxy: true,
  },

  // Auth module configuration: https://auth.nuxtjs.org/guide/setup
  auth: {
    strategies: {
      keycloak: {
        scheme: 'oauth2',
        authorization_endpoint: 'https://localhost:8080/user/authorize',
        userinfo_endpoint: false,
        access_type: 'offline',
        access_token_endpoint: 'https://localhost:8080/token',
        response_type: 'code',
        token_type: 'Bearer',
        token_key: 'access_token',
      },
    },
    redirect: {
      login: '/login',
      callback: '/callback',
      home: '/',
    },
  },

  router: {
    middleware: ['auth'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
