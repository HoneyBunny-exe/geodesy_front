import { createWebHistory, createRouter } from "vue-router";
import AuthView from "@/views/AuthView.vue";
import CreateView from "@/views/CreateView.vue";
import HelpView from "@/views/HelpView.vue";
import HomeView from "@/views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import ProfileView from "@/views/ProfileView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: HomeView },
	{ path: "/profile", component: ProfileView },
	{ path: "/map", component: MapView },
	{ path: "/create", component: CreateView },
	{ path: "/auth", component: AuthView },
	{ path: "/help", component: HelpView },
	{ path: "/:pathMatch(.*)*", component: NotFoundView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});



export { router };
