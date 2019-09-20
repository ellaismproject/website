import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import VueMeta from 'vue-meta';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
