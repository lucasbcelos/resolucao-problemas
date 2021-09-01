
//Inicio dos estudos Js --> Forma de armazenar e mostrar uma variavel

// variável, seu valor pode ser alterado no decorrer do programa
// let nomeEstudante = "Helena";
// console.log(nomeEstudante);

// Mesmo exemplo acima, porem, com a criação de uma constante

// constante, seu valor não pode ser alterado
// const nomeDoEstudante = "Helena";
// console.log(nomeDoEstudante);

//Fim Exemplo básico de Criação de variavel e/ou constante e impressão do resultado

// Inicio Exercicio , Guardar uma lista de estudantes com o nome de cada aluno(a)

// let listaDeEstudantes = ["Helena", "Chico", "Mário"];
// let quantidadeDeEstudantes = listaDeEstudantes.length;
// console.log(quantidadeDeEstudantes);

// // Utilizando o For para Apresentar o nome de cada estudante

// // for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
// // 	const alunoCorrente = listaDeEstudantes[indice];
// // 	console.log(alunoCorrente);
// // }


// // Utilizando o do while para apresentar o nome dos estudantes

// let inicio = 0;

// do {
//     console.log(listaDeEstudantes[inicio]);
//     inicio++;
// } while (inicio < quantidadeDeEstudantes);

// // Utilizando apenas o while para apresentar o nome dos estudantes

// // inicio = 0 ;

// // while (inicio < quantidadeDeEstudantes) {
// //     console.log (listaDeEstudantes[inicio]) ;
// //     inicio ++;
// // }

// // Exibindo uma contagem de 1 a 10 com o for

// // for ( let numero =1; numero <= 10; numero++) {
// //     console.log (numero);
// // }

// // Verificando se a lista possui até cinco nomes para poder inserir novo estudante

// if (quantidadeDeEstudantes < 5) {

//     // Adicionando um novo Estudante a Lista

//     listaDeEstudantes.push("José");
//     console.log(quantidadeDeEstudantes);
// } else {
//     console.log("Não Possui mais espaço na lista")
// }

// // Atualizando a var quantidadeDeEstudante

// quantidadeDeEstudantes = listaDeEstudantes.length;
// console.log(quantidadeDeEstudantes);

// console.log(listaDeEstudantes);

// //Adição e verificação da condição para novo aluno na lista

// if ( quantidadeDeEstudantes < 5) {
//     listaDeEstudantes.push ("Maria");
//     console.log (listaDeEstudantes)
// } else {
//     console.log ("Limite de estudantes na lista alcançado");
// }

// // Atualizando a var quantidadeDeEstudante

// quantidadeDeEstudantes = listaDeEstudantes.length;
// console.log(quantidadeDeEstudantes);

// //Adição e verificação da condição para novo aluno na lista

// if ( quantidadeDeEstudantes < 5) {
//     listaDeEstudantes.push ("João");
//     console.log (listaDeEstudantes)
// } else {
//     console.log ("Limite de estudantes na lista alcançado");
// }

// // Atualizando a var quantidadeDeEstudante

// quantidadeDeEstudantes = listaDeEstudantes.length;
// console.log(quantidadeDeEstudantes);

// // Mostrando a lista de estudantes atualizada

// inicio = 0;

// do {
//     console.log(listaDeEstudantes[inicio]);
//     inicio++;
// } while (inicio < quantidadeDeEstudantes);



//Inicio Prática , fazendo sozinho

//Guardando lista de estudantes, contando a quantidade e mostrando a quantidade e a lista

let listaDeEstudantes = ["Lucas", "Matheus", "Rosi", "Sayuri"];
let quantidadeDeEstudante = listaDeEstudantes.length;
console.log(quantidadeDeEstudante);
console.log(listaDeEstudantes);

//listando nomes um a um com o comando for

for (let contador = 0; contador < quantidadeDeEstudante; contador++) {
    const estudante = listaDeEstudantes[contador];
    console.log(estudante);
}

//Adicionando mais nomes a lista sem passar de 5 nomes

quantidadeDeEstudante = listaDeEstudantes.length;

if (quantidadeDeEstudante < 5) {
    listaDeEstudantes.push("Marcela");
} else {
    console.log("Limite da Lista alcançado, Impossivel Cadastrar novo Aluno");
}

//Atualizando variavel quantidadeDeEstudante e mostrando ela e a listaDeEstudantes atualizada
quantidadeDeEstudante = listaDeEstudantes.length;
console.log(quantidadeDeEstudante);
console.log(listaDeEstudantes);

//Atualizando a listagem de nomes um a um com o comando for

for (contador = 0; contador < quantidadeDeEstudante; contador++) {
    const estudante = listaDeEstudantes[contador];
    console.log(estudante);
}

//Adicionando mais nomes a lista sem passar de 5 nomes

quantidadeDeEstudante = listaDeEstudantes.length;

if (quantidadeDeEstudante < 5) {
    listaDeEstudantes.push("Marimar");
} else {
    console.log("Limite da Lista alcançado, Impossivel Cadastrar novo Aluno");
}

//Atualizando variavel quantidadeDeEstudante e mostrando ela e a listaDeEstudantes atualizada
quantidadeDeEstudante = listaDeEstudantes.length;
console.log(quantidadeDeEstudante);
console.log(listaDeEstudantes);

//Atualizando a listagem de nomes um a um com o comando for
console.log("Essa é a Lista de Alunos(a)");
for (contador = 0; contador < quantidadeDeEstudante; contador++) {
    const estudante = listaDeEstudantes[contador];
    console.log(estudante);
}

//Tarefa Concluida com Sucesso!!