require('dotenv').config()

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
    '@nuxtjs/dotenv',
    // 'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Auth module configuration: https://auth.nuxtjs.org/guide/setup
  auth: {
    local: false,
    strategies: {
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/' +
            process.env.KEYCLOAK_REALM +
            '/protocol/openid-connect/auth',
          token:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/' +
            process.env.KEYCLOAK_REALM +
            '/protocol/openid-connect/token',
          userInfo:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/' +
            process.env.KEYCLOAK_REALM +
            '/protocol/openid-connect/userinfo',
          logout:
            process.env.KEYCLOAK_API_URL +
            'auth/realms/' +
            process.env.KEYCLOAK_REALM +
            '/protocol/openid-connect/logout?redirect_uri=' +
            encodeURIComponent(process.env.HOME_URL),
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: process.env.KEYCLOAK_CLIENT_ID,
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256',
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
  },

  // proxy: {
  //   '/auth': {
  //     target: 'http://localhost:8080',
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@nuxtjs/auth-next'],
  },
}
