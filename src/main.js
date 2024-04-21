import "./assets/main.css";

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./index";

// const app = createApp(App);

// app.use(router);

// app.mount("#app");


import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');