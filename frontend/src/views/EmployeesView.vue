<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Employees</h1>
        
        <button
          @click="openDialog"
          data-testid="add-employee"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
        >
          + Add Employee
        </button>
      </div>

      <EmployeeDialog
        v-if="showDialog"
        :employee="selectedEmployee"
        @save="saveEmployee"
        @close="closeDialog"
      />

      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <EmployeeTable
          :employees="store.employees"
          @edit="editEmployee"
          @delete="deleteEmployee"
        />
      </div>

    </div>
  </div>
</template>

<script setup>

import { ref,onMounted } from "vue";

import EmployeeDialog from "../components/EmployeeDialog.vue";
import EmployeeTable from "../components/EmployeeTable.vue";

import { useEmployeeStore } from "../store/employeeStore";

const store = useEmployeeStore();

const showDialog=ref(false);

const selectedEmployee=ref(null);

onMounted(()=>{

store.fetchEmployees();

});

function openDialog(){

selectedEmployee.value=null;

showDialog.value=true;

}

function closeDialog(){

showDialog.value=false;

}

async function saveEmployee(employee){

if(employee.id){

await store.editEmployee(employee);

}else{

await store.createEmployee(employee);

}

closeDialog();

}

function editEmployee(employee){

selectedEmployee.value=employee;

showDialog.value=true;

}

async function deleteEmployee(id){

await store.removeEmployee(id);

}

</script>