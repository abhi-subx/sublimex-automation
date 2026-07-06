const employees = require("../data/employees");

exports.getEmployees = (req, res) => {
  res.json(employees);
};

exports.addEmployee = (req, res) => {
  const { name, email, role } = req.body;

  const employee = {
    id: Date.now(),
    name,
    email,
    role,
  };

  employees.push(employee);

  res.status(201).json(employee);
};

exports.updateEmployee = (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  employee.name = req.body.name;
  employee.email = req.body.email;
  employee.role = req.body.role;

  res.json(employee);
};

exports.deleteEmployee = (req, res) => {
  const id = Number(req.params.id);

  const index = employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  employees.splice(index, 1);

  res.json({
    message: "Employee deleted successfully",
  });
};