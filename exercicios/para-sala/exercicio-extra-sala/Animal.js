export class Animal{

    #nome;
    raca;
    idade;
    qtdPatas;
    cor;

    constructor(nome, raca, idade, qtdPatas, cor){
        this.#nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.qtdPatas = qtdPatas;
        this.cor = cor
    }

    get nome(){
        return this.#nome;
    }

    set nome(value){
        this.#nome = value
    }

    latir(){
        console.log(`${this.#nome} latiu`)
    }

    comer(){
        console.log(`${this.#nome} comeu`)
    }

    dormir(){
        console.log(`${this.#nome} dormiu`)
    }

    cagar(){
        console.log(`${this.nome} cagou`)
    }
    
}

const hulk = new Animal("Hulk", "SRD", 9, 4, "preto");
console.log(hulk);
console.log(hulk.nome);
hulk.comer();