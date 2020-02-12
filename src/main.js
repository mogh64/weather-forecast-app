import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import { routes } from './router.js'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './services/Store'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(Buefy);


Vue.config.productionTip = false
Vue.http.options.root = 'https://localhost:44322/api/';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
