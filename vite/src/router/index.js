import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignIn from "../components/signIn.vue";
import Buy from "../components/Buy.vue";
import Sell from "../components/Sell.vue";
import Profile from "../components/Profile.vue";
import SignUp from "../components/signUp.vue";
import Bid from "../components/Bidnow.vue";
import Product from "../components/product.vue"
import firebase from "firebase"

// import HelloWorld from '../views/HelloWorld.vue'

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      AuthAndUnauth: true,
    },
  },
  {
    path: "/signin",
    name: "signIn",
    component: SignIn,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/buy",
    name: "Buy",
    component: Buy,
    meta: {
      AuthAndUnauth: true,
    },
  },
  {
    path: "/sell",
    name: "Sell",
    component: Sell,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUp,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/bid/:picID",
    name: "Bid",
    component: Bid,
    meta:{
      requiresAuth: true
    },
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: Product,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Keep current user
  const currentUser = firebase.auth().currentUser;

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const AuthAndUnauth = to.matched.some((record) => record.meta.AuthAndUnauth);

  //condition that every user can access without signin
  if (AuthAndUnauth) {
    console.log("Every one can access to this area");
    next();
  }
  // condition that user already sign in and want to access to the page without authentication
  if (!requiresAuth && currentUser) {
    next("home");
  }
  // condition that user want to access to the page with an authentication but did not sign in yet
  if (requiresAuth && !currentUser) {
    next("signin");
  }
  next();
});

export default router;
