// Some starter code
document.querySelector("#addEmployeeBtn").addEventListener("click", event => {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const emailAddress = document.querySelector("#emailAddress").value;
    const phoneNumber = document.querySelector("#phoneNumber").value;
    const birthday = document.querySelector("#birthday").value;
    const department = document.querySelector("#department").value;


    // Once you have collected all the values, build your data structure
    const employeeToAdd = {
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        birthday: birthday,
        department: department
    }
    fetch("http://localhost:8088/employees", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeToAdd)
    })



})

/* This gets all the employees, loops through them, and prints them to the DOM with the buildToDoItem function */

const printToDoList = () => {
    document.querySelector("#employeeContainer").innerHTML = "";
    getAllEmployees().then(allEmployees => {
      allEmployees.forEach(singleEmployee => {
        document.querySelector("#task-container").innerHTML += buildToDoItem(
          singleTask
        );
      });
    });
  };


