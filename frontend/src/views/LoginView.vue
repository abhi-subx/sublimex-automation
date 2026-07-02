<template>

<div class="login">

    <h1>Login</h1>

    <input
        v-model="email"
        placeholder="Email"
    />

    <br><br>

    <input
        v-model="password"
        type="password"
        placeholder="Password"
    />

    <br><br>

    <button @click="handleLogin">
        Login
    </button>

    <p style="color:red">{{ error }}</p>

</div>

</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";

import api from "../api/api";
import { useAuthStore } from "../store/authStore";

const router = useRouter();

const authStore = useAuthStore();

const email = ref("");

const password = ref("");

const error = ref("");

const handleLogin = async () => {

    error.value = "";

    if (!email.value || !password.value) {
        error.value = "Please fill in all fields";
        return;
    }

    try {

        const response = await api.post("/auth/login", {
            email: email.value,
            password: password.value
        });

        authStore.login(response.data.user, response.data.token);

        router.push("/dashboard");

    }

    catch (err) {

        error.value = err.response?.data?.message || "Login failed. Please try again.";

    }

};

</script>