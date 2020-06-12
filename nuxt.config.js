require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ellaism Project',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Ellaism is an open-source platform for decentralized applications.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/nuxt-clipboard2.js'],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.NUXT_ENV_GA_MEASUREMENT_ID || ''
      }
    ]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    'nuxt-fontawesome',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n'
  ],
  buefy: {
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faGithub',
          'faDiscord',
          'faReddit',
          'faTelegram',
          'faTwitter'
        ]
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faCircle',
          'faWallet',
          'faMicrochip',
          'faServer',
          'faWindowRestore',
          'faRobot',
          'faCubes',
          'faHeartbeat',
          'faTerminal',
          'faBalanceScale',
          'faUsers',
          'faInfoCircle'
        ]
      }
    ]
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
