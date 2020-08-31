const employees = [];

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managersa: managers,
    responsibleFor: responsibleFor
  }
  employees.push(newEmployee);
  //console.log(employees)
}
addEmployee('39800c14-4b76-454a-858d-2f8d1681', 'Jene', 'Doe', [], []);

addEmployee('39800c14-4b76-454a-858d-2f8d1681', 'Jehgf', 'Doe', [], []);
console.log(employees);