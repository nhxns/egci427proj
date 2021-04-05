import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignIn from "../components/signIn.vue";
import Buy from "../components/Buy.vue";
import Sell from "../components/Sell.vue";
import Profile from "../components/Profile.vue";
import SignUp from "../components/signUp.vue";
import Bid from "../components/Bidnow.vue";

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
  },
  {
    path: "/buy",
    name: "Buy",
    component: Buy,
  },
  {
    path: "/sell",
    name: "Sell",
    component: Sell,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/bid",
    name: "Bid",
    component: Bid,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
