export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss', 'aos/dist/aos.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vue-waypoint', ssr: false },
    { src: '~plugins/aos.js', ssr: false },
    { src: '~plugins/buefy.js', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    [
      'nuxt-fire',
      {
        config: {
          development: {
            apiKey: 'AIzaSyApV794qET7mqkSYjue- V_42yMsspb7Arg',
            authDomain: 'clesdusavoirfaire.firebaseapp.com',
            databaseURL: 'https://clesdusavoirfaire.firebaseio.com',
            projectId: 'clesdusavoirfaire',
            storageBucket: '',
            messagingSenderId: '642947624068',
            appId: '1:642947624068:web:53659082b6ec8b619026d1'
          },
          production: {
            apiKey: 'AIzaSyApV794qET7mqkSYjue- V_42yMsspb7Arg',
            authDomain: 'clesdusavoirfaire.firebaseapp.com',
            databaseURL: 'https://clesdusavoirfaire.firebaseio.com',
            projectId: 'clesdusavoirfaire',
            storageBucket: '',
            messagingSenderId: '642947624068',
            appId: '1:642947624068:web:53659082b6ec8b619026d1'
          }
        },
        // The following options are optional:
        useOnly: ['auth', 'firestore', 'functions', 'storage', 'realtimeDb', 'messaging', 'performance'],
        customEnv: false,
        functionsLocation: 'us-central1',
      }
    ]
  ],
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
    extend(config, ctx) {}
  },
  serverMiddleware: [
    '~/api/contact'
  ]
}
