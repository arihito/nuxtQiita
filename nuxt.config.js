module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js by Qiita',
    titleTemplate: '%s | nuxt-qiita',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router
  */
  router: {
    middleware: [
      'auth'
    ]
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Modules option
  */
  axios: {

  },
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/logger'
  ],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

