import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ComicDetails from "../views/ComicDetails.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/comics/:id",
    name: "comic-details",
    component: ComicDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
