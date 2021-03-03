import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css';

// Custom SCSS
import './assets/styles/style.css';

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
