import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignIn from "../views/signIn.vue"

// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "signIn",
    component: SignIn,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
