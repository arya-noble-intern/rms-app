const routes = [
    {
        path: "/",
        component: () => import("../pages/Home.vue"),
        name: "home"
    },
    {
        path: "/talents",
        component: () => import("../pages/talents/index.vue"),
        name: "talents"
    }
];

export default routes;
