import authMiddleware from "../middlewares/auth";
import picOnly from "../middlewares/picOnly";
import multiguard from "vue-router-multiguard";

const routes = [
    {
        path: "/",
        component: () => import("../pages/Home.vue"),
        beforeEnter: authMiddleware,
        name: "home"
    },
    {
        path: "/talents",
        component: () => import("../pages/talents/index.vue"),
        beforeEnter: multiguard([authMiddleware, picOnly]),
        name: "talents"
    },
    {
        path: "/talents/create",
        component: () => import("../pages/talents/create.vue"),
        beforeEnter: multiguard([authMiddleware, picOnly]),
        name: "talents-create"
    },
    {
        path: "/talents/:id",
        component: () => import("../pages/talents/_id.vue"),
        beforeEnter: multiguard([authMiddleware, picOnly]),
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
    },
    {
        path: "/employee-request-forms",
        component: () => import("../pages/employeeRequestForms/index.vue"),
        beforeEnter: multiguard([authMiddleware]),
        name: "employee-request-forms-index"
    },
    {
        path: "/employee-request-forms/:id",
        component: () => import("../pages/employeeRequestForms/_id/index.vue"),
        beforeEnter: multiguard([authMiddleware]),
        children: [
            {
                path: "",
                component: () =>
                    import("../components/EmployeeRequestForms/Details.vue"),
                name: "employee-request-forms-show"
            },
            {
                path: "requester",
                component: () =>
                    import("../components/EmployeeRequestForms/Requester.vue"),
                name: "employee-request-forms-requester"
            }
        ]
    }
];

export default routes;
