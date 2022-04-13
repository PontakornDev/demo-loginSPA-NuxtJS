export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lab-Login',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  vuetify: {
    theme: {
      themes: {
        dark: {
          primary: '#4caf50',
          secondary: '#ff8c00',
          accent: '#9c27b0'
        }
      }
    }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.URL_API
    }
  },

  auth: {
    cookie: false,
    strategies: {
      local: {

        token: {
          property: 'token',
          global: true,
          maxAge: 7200
        },
        user: {
          property: ''
        },
        endpoints: {
          login: { url: process.env.URL_API + '/login', method: 'post' },
          logout: { url: process.env.URL_API + '/logout', method: 'delete' },
          user: { url: process.env.URL_API + '/users', method: 'get' }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    URL_API: process.env.URL_API || ''
  }
}
