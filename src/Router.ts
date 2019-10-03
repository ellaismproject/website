import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "pages" */ './views/Home.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "pages" */ './views/About.vue'),
        },
        {
            path: '/wallets',
            name: 'wallet',
            component: () => import(/* webpackChunkName: "pages" */ './views/Wallet.vue'),
        },
        {
            path: '/mining',
            name: 'mining',
            component: () => import(/* webpackChunkName: "pages" */ './views/Mining.vue'),
        },
        {
            path: '/bots',
            name: 'bot',
            component: () => import(/* webpackChunkName: "pages" */ './views/Bot.vue'),
        },
        {
            path: '/dapps',
            name: 'dapp',
            component: () => import(/* webpackChunkName: "pages" */ './views/DApp.vue'),
        },
        {
            path: '/testnet',
            name: 'testnet',
            component: () => import(/* webpackChunkName: "pages" */ './views/Testnet.vue'),
        },
        {
            path: '/donate',
            name: 'donate',
            component: () => import(/* webpackChunkName: "pages" */ './views/Donate.vue'),
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "pages" */ './views/Error404.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
});
