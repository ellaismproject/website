import Vue from 'vue';
import App from './App.vue';
import Router from './Router';
import VueMeta from 'vue-meta';
import i18n from '@/plugins/i18n';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
    i18n,
    router: Router,
    render: (h) => h(App),
}).$mount('#app');
