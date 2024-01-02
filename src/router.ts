import * as VueRouter from "vue-router";
import TopPage from "../src/pages/topPage.vue";
import ProfilePage from "../src/pages/profilePage.vue";

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: "/",
    name: "Top",
    component: () => TopPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => ProfilePage,
  },
];

export const createRouter = (type: "memory" | "history") => {
  const history = type === "memory" ? VueRouter.createMemoryHistory() : VueRouter.createWebHistory();
  return VueRouter.createRouter({ history, routes });
};