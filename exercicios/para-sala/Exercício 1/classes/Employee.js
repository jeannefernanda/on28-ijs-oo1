export class Employee{
    id;
    name;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    raiseSalary(percent){
        this.salary += this.salary*percent;
    }
}
