export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-ecommerce',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/tailwind.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
    ],

    /* axios: {
        withCredentials: true,
        auth: {
            consumer_key: 'ck_ee0ecaa19b04a8090dc2bc527499358b8183f68c',
            consumer_secret: 'cs_86c89ee5116f4d80d27f73e8d3ba42956387c0a7'
        },
        config: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    }, */

    styleResources: {
        scss: ['~/assets/scss/style.scss'],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
