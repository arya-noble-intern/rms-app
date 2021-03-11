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
        children: [
            {
                path: "",
                component: () => import("../components/Talents/Details.vue"),
                name: "talents-show"
            },
            {
                path: "edit",
                component: () => import("../components/Talents/Edit.vue"),
                name: "talents-show-edit"
            }
        ]
    }
];

export default routes;
