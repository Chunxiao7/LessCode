import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
