import Vue from "vue";
import VueRouter from "vue-router";
import QuemSou from "../views/QuemSou.vue";
import Hobbies from "../views/Hobbies.vue";
import OQueFaco from "../views/OQueFaco.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuemSou",
    component: QuemSou,
  },
  {
    path: "/OQueFaco",
    name: "OQueFaco",
    component: OQueFaco,
  },
  {
    path: "/Hobbies",
    name: "Hobbies",
    component: Hobbies,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
