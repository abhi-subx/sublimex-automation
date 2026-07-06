<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        {{ employee ? "Edit Employee" : "Add Employee" }}
      </h2>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            v-model="form.name"
            placeholder="Enter name"
            data-testid="employee-name"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            data-testid="employee-email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            v-model="form.role"
            data-testid="employee-role"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Manager</option>
            <option>Developer</option>
            <option>Tester</option>
          </select>
        </div>
      </div>

      <div class="flex gap-3 mt-6">
        <button
          @click="save"
          data-testid="save-employee"
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Save
        </button>

        <button
          @click="$emit('close')"
          class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  employee: Object,
});

const emit = defineEmits(["save", "close"]);

const form = reactive({
  id: props.employee?.id,
  name: props.employee?.name || "",
  email: props.employee?.email || "",
  role: props.employee?.role || "Developer",
});

function save() {
  emit("save", { ...form });
}
</script>