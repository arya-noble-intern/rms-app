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
    },
    {
        path: "/talents/create",
        component: () => import("../pages/talents/create.vue"),
        name: "talents-create"
    },
    {
        path: "/talents/:id",
        component: () => import("../pages/talents/_id.vue"),
        name: "talents-show"
    }
];

export default routes;
