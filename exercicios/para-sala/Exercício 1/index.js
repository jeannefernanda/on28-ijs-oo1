import { Employee } from "./classes/Employee.js";


const employee1 = new Employee(1,"André",1800)
console.log(employee1);
employee1.raiseSalary(0.10);
console.log(employee1);