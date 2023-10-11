class Tarefa{
    titulo;
    descricao;
    concluida;

    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }
}

class ToDoList{
    #tarefas = [];

    adicionarTarefa(titulo, descricao){
        const tarefa = new Tarefa(titulo, descricao);
        this.#tarefas.push(tarefa);
        console.log(`Tarefa adicionada: ${titulo}`);
    }

    listarTarefas(){     
        this.#tarefas.forEach((tarefa) => {
            /* let status;
            if(tarefa.concluida){
                status = "concluída";
            } else{
                status = "não concluída"
            } */
            const status = tarefa.concluida ? "concluída" : "não concluída";
            console.log(`${tarefa.titulo}: (${status}) ${tarefa.descricao}`);
        })
    }

    marcarTarefaConcluida(titulo){
       const indexDaTarefa = this.#tarefas.findIndex((tarefa) => tarefa.titulo === titulo);

       if(indexDaTarefa === -1){
            console.log(`Tarefa não encontrada: ${titulo}`);
       } else{
            this.#tarefas[indexDaTarefa].concluida = true;
            console.log(`Tarefa concluída: ${titulo}`);
       }
    }

    removerTarefa(titulo){
        /* const index = this.#tarefas.findIndex((tarefa) => tarefa.titulo === titulo);

        if (index !== -1) {
            this.#tarefas.splice(index, 1);
            console.log(`Tarefa com o título "${titulo}" removida com sucesso.`);
        } else {
            console.log(`Tarefa com o título "${titulo}" não encontrada.`);
        } */

        this.#tarefas = this.#tarefas.filter((tarefa) => tarefa.titulo !== titulo);
        console.log(`tarefa removida: ${titulo}`);
    }

}

const lista1 = new ToDoList()
lista1.adicionarTarefa("Compras", "Compras de farmácia")
lista1.adicionarTarefa("Estudar", "Prova na sexta")
console.log(lista1)// a lista é privada por isso não exibe as tarefas
lista1.listarTarefas()
lista1.marcarTarefaConcluida("Estudar")
lista1.removerTarefa("Estudar")
lista1.listarTarefas()
lista1.marcarTarefaConcluida("Correr")
