<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">SublimeX Automation Dashboard</h1>

          <div class="flex gap-3">
            <router-link to="/employees">
              <button
                data-testid="employees-menu"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
              >
                Employees
              </button>
            </router-link>

            <button
              data-testid="logout-button"
              @click="logout"
              class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h2 data-testid="welcome-text" class="text-2xl font-bold text-gray-900 mb-4">
          Welcome, {{ user.name }} 👋
        </h2>

        <div class="space-y-3">
          <div class="flex items-center">
            <span class="text-gray-600 font-medium w-24">Email:</span>
            <span class="text-gray-900">{{ user.email }}</span>
          </div>

          <div class="flex items-center">
            <span class="text-gray-600 font-medium w-24">User ID:</span>
            <span class="text-gray-900">{{ user.id }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Automation Status</h3>

        <ul class="space-y-4">
          <li class="flex items-center">
            <span class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span class="text-gray-700">Backend Connected</span>
          </li>

          <li class="flex items-center">
            <span class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span class="text-gray-700">Authentication Working</span>
          </li>

          <li class="flex items-center">
            <span class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <span class="text-gray-700">Vue Router Protected</span>
          </li>

          <li class="flex items-center">
            <span class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span class="text-lg">🚀</span>
            </span>
            <span class="text-gray-700 font-medium">Ready for Playwright Tests</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";
import { storeToRefs } from "pinia";

const router = useRouter();

const auth = useAuthStore();

const { user, token } = storeToRefs(auth);

function logout() {
  auth.logout();
  router.push("/");
}
</script>