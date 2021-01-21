/* Development stats */
import Development from './development.js';
if (process.env.NODE_ENV === "development") {Development.addWindowStatsElement();}

/* App styles */
import "@/scss/main.scss";

/* Preloader (old-style function) */
(function preloader(){
  window.addEventListener("load", hidePreloader);
  function hidePreloader(){
    var preloader = document.querySelector('.js-preloader');
    preloader.style.display = 'none';
  }
})();

/* Vue app */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#vue-app');

console.log("test2");