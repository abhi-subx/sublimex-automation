<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p class="text-gray-600 mt-2">Sign in to your account</p>
      </div>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            data-testid="email-input"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            data-testid="password-input"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
        </div>

        <button
          data-testid="login-button"
          @click="handleLogin"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-200"
        >
          Sign In
        </button>

        <p v-if="error" class="text-red-600 text-center text-sm font-medium">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";

import api from "../services/api"; 
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