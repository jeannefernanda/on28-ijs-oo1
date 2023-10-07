export class Account{
    id;
    name;
    #balance;

    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    get balance(){
        return this.#balance;
    }

    set balance(value){
        this.#balance = value;
    }

    credit(amount){
        this.#balance += amount;
    }

    debit(amount){
        if(this.balance < amount)
            console.log("Saldo insuficiente.")
        else this.#balance -= amount;
    }

    transferTo(anotherAccount, amount){
        if(anotherAccount instanceof Account){
            if(this.#balance >= amount){
                this.#balance -= amount;
                anotherAccount.balance += amount;
            }
            else console.log("Saldo insuficiente. Transferência não realizada.")
        }
        else console.log("Conta não cadastrada")
    }
}



