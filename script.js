/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee) => {
    if (employee.profession == "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredArray = arr.filter((employee) => {
    return employee.profession !== "admin";
  });
  console.log(filteredArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "anwar", age: 24, profession: "developer" },
    { id: 6, name: "ahmad", age: 25, profession: "intern" },
    { id: 7, name: "ali", age: 26, profession: "intern" },
    { id: 8, name: "Naved", age: 27, profession: "admin" },
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
//done 
