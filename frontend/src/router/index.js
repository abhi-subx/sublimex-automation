import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import EmployeesView from "../views/EmployeesView.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: LoginView
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardView
    },
    {
        path: "/employees",
        name: "Employees",
        component: EmployeesView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;