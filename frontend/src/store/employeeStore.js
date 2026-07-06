import { defineStore } from "pinia";
import * as employeeService from "../services/employeeService";

export const useEmployeeStore = defineStore("employee", {
  state: () => ({
    employees: [],
    loading: false,
  }),

  actions: {
    async fetchEmployees() {
      this.loading = true;

      try {
        const response = await employeeService.getEmployees();
        this.employees = response.data;
      } finally {
        this.loading = false;
      }
    },

    async createEmployee(employee) {
      const response = await employeeService.addEmployee(employee);
      this.employees.push(response.data);
    },

    async editEmployee(employee) {
      const response = await employeeService.updateEmployee(
        employee.id,
        employee
      );

      const index = this.employees.findIndex(
        (e) => e.id === employee.id
      );

      this.employees[index] = response.data;
    },

    async removeEmployee(id) {
      await employeeService.deleteEmployee(id);

      this.employees = this.employees.filter(
        (e) => e.id !== id
      );
    },
  },
});