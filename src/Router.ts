import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/wallets',
            name: 'wallet',
            component: () => import(/* webpackChunkName: "wallet" */ './views/Wallet.vue'),
        },
        {
            path: '/mining',
            name: 'mining',
            component: () => import(/* webpackChunkName: "mining" */ './views/Mining.vue'),
        },
        {
            path: '/bots',
            name: 'bot',
            component: () => import(/* webpackChunkName: "bot" */ './views/Bot.vue'),
        },
        {
            path: '/dapps',
            name: 'dapp',
            component: () => import(/* webpackChunkName: "dapp" */ './views/DApp.vue'),
        },
        {
            path: '/testnet',
            name: 'testnet',
            component: () => import(/* webpackChunkName: "testnet" */ './views/Testnet.vue'),
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "notfound" */ './views/Error404.vue'),
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
