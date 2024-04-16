import {createRouter, createWebHistory} from 'vue-router';

import LogIn from './pages/LogIn.vue';
import SignUp from './pages/SignUp.vue';

import WelcomePage from './components/WelcomePage.vue'

const routes = [
    { path: '/WelcomPage', component: WelcomePage },


    {path: '/LogIn', component: LogIn},
    {path: '/SignUp', component: SignUp}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;