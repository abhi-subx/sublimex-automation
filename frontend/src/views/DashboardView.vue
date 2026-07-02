<template>
  <div class="dashboard">

    <div class="topbar">
      <h1>SublimeX Automation Dashboard</h1>

      <button @click="logout">
        Logout
      </button>
    </div>

    <div class="card">
      <h2>Welcome {{ user.name }}</h2>

      <p>Email : {{ user.email }}</p>

      <p>User ID : {{ user.id }}</p>
    </div>

    <div class="card">
      <h3>Automation Status</h3>

      <ul>
        <li>Backend Connected ✅</li>
        <li>Authentication Working ✅</li>
        <li>Vue Router Protected ✅</li>
        <li>Ready for Playwright Tests 🚀</li>
      </ul>
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

<style scoped>

.dashboard{
    width:900px;
    margin:40px auto;
    font-family:Arial;
}

.topbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
}

button{
    background:#e53935;
    color:white;
    border:none;
    padding:10px 18px;
    border-radius:6px;
    cursor:pointer;
}

.card{
    border:1px solid #ddd;
    border-radius:8px;
    padding:20px;
    margin-bottom:20px;
}

li{
    margin:10px 0;
}

</style>