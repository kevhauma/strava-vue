import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import View from "../views/View.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/view",
    name: "View",
    component: View,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
