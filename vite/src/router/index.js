import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignIn from "../components/signIn.vue";
import Buy from "../components/Buy.vue";
import Sell from "../components/Sell.vue";
import Profile from "../components/Profile.vue";
import SignUp from "../components/signUp.vue";
import Bid from "../components/Bidnow.vue";
import firebase from "firebase"

// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home"
  },
  {
    path: "/home",
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
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      requiresAuth: true
    }
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
    meta:{
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    console.log("You are not authorized to access this area.");
    next('signin')
  } else if (!requiresAuth && currentUser) {
    console.log("You are authorized to access this area.");
    next('')
  } else {
    next()
  }
})

export default router;
