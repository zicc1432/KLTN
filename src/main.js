import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";
import store from '@/store/index';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

window.$ = window.jQuery = jQuery

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('Topnav', require('./components/Topnav.vue').default)
Vue.component('BreadCrumb', require('./components/BreadCrumb.vue').default)



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
