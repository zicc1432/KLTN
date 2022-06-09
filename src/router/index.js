import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Admin from "../views/Admin.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Home/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "Forgot-password",
    component: () => import("../views/Home/ForgotPassword.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Home/Register.vue"),
  },
  {
    path: "/products",
    name: "Products",
    props: true,
    component: () =>
      import("../views/Products.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    props: true,
    component: () =>
      import("../views/ProductDetail/ProductDetail.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductSale",
    props: true,
    component: () =>
      import("../views/ProductDetail/ProductSale.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    props: true,
    component: () =>
      import("../views/Home/Cart.vue"),
  },
  {
    path: "/pay",
    name: "Pay",
    props: true,
    component: () =>
      import("../views/Pay.vue"),
  },
  {
    path: "/voucher",
    name: "Voucher",
    component: () =>
      import("../sections/Voucher.vue"),
  },
  {
    path: "/toner",
    name: "Toner",
    props: true,
    component: () =>
      import("../pages/type/Toner.vue"),
  },
  {
    path: "/cosrx",
    name: "Cosrx",
    props: true,
    component: () =>
      import("../pages/brand/Cosrx.vue"),
  },
  {
    path: "/compare",
    name: "Compare",
    props: true,
    component: () =>
      import("../views/Products/Compare.vue"),
  },
  {
    path: "/cerave",
    name: "Cerave",
    props: true,
    component: () =>
      import("../pages/brand/Cerave.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
