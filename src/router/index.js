import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Wallet from "../views/Wallet.vue";
import Shipments from "../views/Shipments.vue";
import Order from "../views/Order.vue";
import Contact from "../views/Contacts.vue";
import Details from "../views/Details.vue";
import NotFound from "../views/NotFound.vue";
import Unauthorized from "../views/Unauthorized.vue";
import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { auth: false },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { auth: false },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { auth: true },
  },
  {
    path: "/wallet",
    name: "wallet",
    component: Wallet,
    meta: { auth: true },
  },
  {
    path: "/shipments",
    name: "shipments",
    component: Shipments,
    meta: { auth: true },
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    meta: { auth: true },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: { auth: true },
  },
  {
    path: "/details",
    name: "details",
    component: Details,
    meta: { auth: true },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: "/401",
    name: "Unauthorized",
    component: Unauthorized,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !Store.getters["currentUser"]) {
    next("/login");
  } else if (!to.meta.auth && Store.getters["currentUser"]) {
    next("/home");
  } else {
    next();
  }
});

export default router;
