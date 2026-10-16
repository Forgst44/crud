// laço de repetição

/* let nomes = ["Ana Clara","Denise Martins","Rayssa giovanelly","Roger Alcantara"];

nomes.forEach(nome => {
    console.log(nome)
}); */

// Enquanto
// Enquanto a condição for verdadeira, o laço continuará se repetindo


/* let nome = prompt("Digite o nome do usuário:")
while(nome !== "Thiago"){
    console.log("Insira o nome correto:");
     nome = prompt("Digite o nome do usuário novamente:")
}; */

let tarefas = ["Estudar", "Lavar louça", "Ir pra aula"];

let opcao = -1;

while (opcao !== 0) {

    opcao = Number(prompt(
        "== LISTA DE ATIVIDADES ==\n" +
        "1 - Cadastrar uma atividade\n" +
        "2 - Listar atividades\n" +
        "3 - Buscar atividade\n" +
        "4 - Atualizar alguma atividade\n" +
        "5 - Excluir uma atividade\n" +
        "6 - Filtrar atividades\n" +
        "7 - Adicionar tarefa no início\n" +
        "8 - Remover atividade do início\n" +
        "9 - Remover atividade do final\n" +
        "0 - Sair"
    ));


  switch (opcao) {

        case 1: {
            // Cadastrar tarefa (push())

            let novaTarefa = prompt("Digite a nova tarefa:");

            if (novaTarefa === null || novaTarefa.trim() === "") {
                alert("Digite uma tarefa válida!");
                break;
            }

            let filtrar = tarefas.some(
                tarefa => tarefa.toLowerCase() === novaTarefa.trim().toLowerCase()
            );

            if (filtrar === false) {
                tarefas.push(novaTarefa.trim());
                
                prompt("Tarefa cadastrada com sucesso!");
            } else {
                alert("Essa tarefa já existe!");
            }

            break;
        }

        case 2:
            // Listar (forEach())
            
             tarefas.forEach(tarefa =>  
            alert(tarefa));
    

            break;

        case 3:
            // Buscar (.includes())

            let procurar = prompt("qual atividade deseja procurar?")

            if(procurar === null){
                alert.apply("digite um nome valido!")
            }

            else(
            procurar = tarefas.find(tarefa =>
                tarefa.toLowerCase().includes(procurar.toLowerCase())
            )
        )
        if(procurar === undefined){
            prompt("tarefa não registrada")
        }
        else{
            prompt("tarefa encontrada")
        }


            break;

        case 4:
            // Atualizar (indexOf())


            let antiguaTarefa = prompt("qual atividade deseja atualizar?")

            let novaAtividade = prompt("Digite a nova tarefa:")

            tarefa = tarefas.find(tarefa =>
                tarefa.toLowerCase().includes(antiguaTarefa.toLowerCase())
            )
            let index = tarefas.indexOf(tarefa);
            tarefas[index] = novaAtividade




            break;

        case 5:
            // Excluir (findIndex() e splice())


            
            let excluirAtividade = prompt("qual atividade deseja atualizar?")

            tarefa = tarefas.findIndex(function(tarefa){
                return tarefa === excluirAtividade;
            })
                if(excluirAtividade !== -1){
                    tarefas.splice(excluirAtividade, 1);
                    alert("Tarefa excluida com sucesso")
                }
                else{
                    alert("tarefa não encontrada para excluir")
                }

            break;

        case 6:
            // Filtrar (filter())



            let palavra = prompt("Digite uma palavra para filtrar: ")
            let filtrardas = tarefas.filter(tarefa =>
                tarefa.toLowerCase().includes(palavra.toLowerCase())
            );

            alert("Tarefas filtradas: " + filtrardas);

            
            break;

        case 7:
            // Adicionar no início (unshift())
            break;

        case 8:
            // Remover do início (shift())
            break;

        case 9:
            // Remover do final (pop())
            break;

        case 0:
            // Sair do programa
            break;

        default:
            alert("Opção inválida");
    }


};