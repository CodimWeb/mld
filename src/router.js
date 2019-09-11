import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Homework from "./views/Homework.vue";
import Library from "./views/Library.vue";
import Order from "./views/Order.vue";
import Journal from "./views/Journal.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Recovery from "./views/Recovery.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/recovery",
      name: "recovery",
      component: Recovery
    },
    {
      path: "/library",
      name: "library",
      component: Homework
    },
    {
      path: "/homework",
      name: "homework",
      component: Library
    },
    {
      path: "/journal",
      name: "journal",
      component: Journal
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
});
