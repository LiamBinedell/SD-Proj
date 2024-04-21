import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/components/Welcome.vue";
import Login from "@/components/Login.vue";
import Signin from "@/components/Signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signin,
    },
  ],
});

export default router;