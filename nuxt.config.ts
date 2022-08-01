import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
  ],
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],
  router: {
    routes: [
      {
        name: 'signup',
        path: '/signup',
        component: '@pages/signup.vue',

      },
      {
        name: 'home',
        path: '/home',
        component: '@pages/home.vue',

      },
    ],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
