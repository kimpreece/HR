/* This gets all the employees, loops through them, and prints them to the DOM with the buildToDoItem function */

const printAllEmployees = () => {
        document.querySelector("#employeeContainer").innerHTML = "";

        fetch("http://localhost:8088/employees")
            .then(employees => employees.json())
            .then(parsedEmployee => {
                parsedEmployee.forEach(singleEmployee => {
                    document.querySelector("#employeeContainer").innerHTML +=
                        `<div>
                    <h3>${singleEmployee.firstName} ${singleEmployee.firstName}</h3>
                    <p>${singleEmployee.birthday} ${singleEmployee.emailAddress} ${singleEmployee.phoneNumber}
                    ${singleEmployee.department}</p>
                    </div>`
                });
            })
    }