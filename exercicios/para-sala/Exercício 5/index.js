class Employee {
    
    #id;
    #firstName;
    #lastName;
    #salary;
    
    constructor(identificacao, nomeFuncionario, sobrenomeFuncionario, salarioFuncionario) {
      this.#id = identificacao;
      this.#firstName = nomeFuncionario;
      this.#lastName = sobrenomeFuncionario;
      this.#salary = salarioFuncionario;
    }

    get id(){
        return this.#id;
    }

    get firstName(){
        return this.#firstName;
    }

    get lastName(){
        return this.#lastName;
    }

    get salary(){
        return this.#salary;
    }

    set salary(newSalary){
        this.#salary = newSalary;
    }

    get anualSalary(){
        return this.#salary * 12;
    }
  
    raiseSalary(percent) {
      if (percent > 0) {
        this.salary += (this.salary * percent) / 100;
      }
    }

    employeeToString(){
        return `id: ${this.id}, name: ${this.#firstName}, lastname: ${this.#lastName}, salary: ${this.salary}`
    }
  }
  
  // Exemplo de teste
  const employee1 = new Employee(1, "João", "Santos", 50000);
  
  console.log("Informações do Funcionário:");
  console.log(`ID: ${employee1.id}`);
  console.log(`Nome: ${employee1.firstName}`);
  console.log(`Salário Inicial: R$ ${employee1.salary}`);
  
  employee1.raiseSalary(10); // Aumento de 10%
  console.log(`Novo Salário após aumento: R$ ${employee1.salary}`);
  console.log(employee1.employeeToString())