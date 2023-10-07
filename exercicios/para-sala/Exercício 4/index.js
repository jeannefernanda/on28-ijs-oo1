class Income{
    balance;
    interestRate;

    constructor(balance, interestRate){
        this.balance = balance;
        this.interestRate = interestRate;
    }

    printBalance(){
        console.log(`O saldo é de ${this.balance}`);
    }

    calculateIncome(){
        this.balance += this.balance*this.interestRate;
        console.log(this.balance);
    }

}

const income1 = new Income(1000, 0.05);
income1.printBalance();
income1.calculateIncome();