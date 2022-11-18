
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
	const empl1 = {...employee, "name": "Sam", "streetAddress": "11 Broadway" }
	return empl1
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
	employee[key] = value;
	return employee
}

function deleteFromEmployeeByKey(employee, key) {
	const empl2 = {...employee[key]}
	delete empl2[key]
	return empl2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
	delete employee[key]
	return employee
}