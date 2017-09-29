// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import VueRouter from 'vue-router';
import VueCharts from 'vue-charts';

import App from './App'
import MapSection from './MapSection'
import StatistiquePseudoSection from './StatistiquePseudoSection'
import PseudoSimilaireSection from './PseudoSimilaireSection'


Vue.config.productionTip = false


// create router instance and define routes
Vue.use(VueRouter);
Vue.use(VueCharts);




let router = new VueRouter({
  routes: [
    { name: 'index', path: '/', component: MapSection },
    { name: 'pseudo-stats', path: '/pseudo-stats/', component: StatistiquePseudoSection},
    { name: 'pseudo-similaire', path: '/pseudo-similaire/', component: PseudoSimilaireSection}
  ],
  hashbang: false,
  mode: 'history',
  root: '/',
  saveScrollPosition: true
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
})
