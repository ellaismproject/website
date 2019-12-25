import Vue from 'vue';
import App from './App.vue';
import Router from './Router';
import VueMeta from 'vue-meta';
import i18n from '@/plugins/i18n';
import VueAnalytics from 'vue-analytics';
import VueClipboard from 'vue-clipboard2';
import Buefy from 'buefy';

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});
Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_MEASUREMENT_ID,
    router: Router,
});
Vue.use(VueClipboard);
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
    i18n,
    router: Router,
    render: (h) => h(App),
}).$mount('#app');
