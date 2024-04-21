// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Welcome from './components/Welcome.vue';

Vue.use(VueRouter);

const routes = [
  // { path: '/', component: App },
  {path: '/', component : Welcome}
  // Add more routes as needed
];

const router = new VueRouter({
  routes,
});

export default router