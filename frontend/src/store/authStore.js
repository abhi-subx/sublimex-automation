import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {

    state: () => ({
        token: localStorage.getItem("token") || "",
        user: JSON.parse(localStorage.getItem("user")) || {}
    }),

    actions: {

        login(userData, token) {

            this.user = userData;
            this.token = token;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

        },

        logout() {

            this.token = "";
            this.user = {};

            localStorage.removeItem("token");
            localStorage.removeItem("user");

        }

    }

});