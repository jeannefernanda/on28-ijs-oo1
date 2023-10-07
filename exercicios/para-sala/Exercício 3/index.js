import { Account } from "./classes/Account.js";

const account1 = new Account(1,"Ana", 1000);
const account2 = new Account(2, "Bruna", 500);
console.log(account1); //Account { id: 1, name: 'Ana' }
console.log(account2); //Account { id: 2, name: 'Bruna' }
console.log(account1.balance); //1000
console.log(account2.balance); //500
account1.credit(100);
console.log(account1.balance); //1100
account1.transferTo(account2, 300);
console.log(account1.balance); // 800
console.log(account2.balance); //800
account1.transferTo("teste", 300); //Conta não cadastrada
account2.debit(801) //Conta não cadastrada
account2.debit(500) //Saldo insuficiente.
console.log(account2.balance); //300
account2.transferTo(account1, 300);
console.log(account1.balance); //1100
console.log(account2.balance); //0
account2.transferTo(account1, 1); //Saldo insuficiente. Transferência não realizada.

