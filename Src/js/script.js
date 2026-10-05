// Declaraçoes

let nome="Fiap";
const idade =30;
let altura=1.70;
let estudante = true;

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof altura);
// console.log(typeof estudante);

// // Metiodos de exibição

// alert("Bem vindo ao sistema")
// let nomeUsuario = prompt("Qual e o nome do Usuario")
// // ``${} = concatenção
// console.log(`Ola, ${nomeUsuario}`)

// let desejaContinuar = confirm("deseja remalmente continuar? ")
// console.log("Resposta", desejaContinuar)

//Operadores (Aritimeticos, Comparação e logicos)

let soma = 10 +67;
console.log(soma)
let multiplicaçao= 4 *7;
console.log(multiplicaçao)
let subtraçao = 69 -2;
console.log(multiplicaçao)
let resto= 10 %3;
console.log(resto)
let divisao =5 / 3;
console.log(divisao)

//comparação

let a= 10;
let b = "10";

// = (atribuir)
// == (compara o valor)
// === (compara o valor e o tipo da variavel)

console.log(a == b); // compara
console.log(a === b); // compara e valida
console.log(a > b); // maior
console.log(a < b);// maior ou igual
console.log(a != b);// diferente
console.log(a < 10);
// operado amd && = as duas tem que ser verdadeiras
console.log(b < a && a > b)
// operador || uma das operaçoes tem que ser verdadeira
console.log(a > 20 || b >= a);

let temidade =18;
let habilitação=true;

let dirigir = (temidade >= 18) && habilitação;
console.log("O Usuário pode Dirigir ?", dirigir);

// estrutura condicional

if(true){
    console.log("É VERDADEIRO")
}

if(true) {
    console.log("VERDADEIRO")
}else{
    console.log(falso)
}

// if/ if/else /else encadeado

let nota= 7;

if (nota >= 8){
    console.log("Aprivado com sucesso")
}

else if (nota >= 6){
    console.log("Ficou de exame")
}

else{
    console.log("Reprovado")
}

// switch case

let diaSemana=3;
switch(diaSemana){
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
    console.log("Terca-feira")
        break;
    case 3:
    console.log("Quarta-feira")
        break;
    default:
            console.log("Outro dia")
}

// ternario encadeado ?(if) :(else)

let notaUsuario= (nota >=6)? "Aprovado": "Reprovado";
console.log(notaUsuario)

let idade1= 18;
let podePilotar= idade1 >=18 ? "Pode pilotar": "Não pode pilotar";

// let resultado = 10

// let jogador = resultado <= 20 ? "jogo bom":
//                resultado > 20 && resultado < 99 ? "jogo medio":
//                resultado > 100 ? "jogo Alto":"Extraordinario";
// console.log(jogador)

// let nomeDev = prompt("Qual o seu nome? ")
// let mensagem =nomeDev ? `Olá, dev ${nomeDev}`:"Você não digitou"

// console.log(mensagem)


// estrutura de repetção

// for

    // declaração operação incremento
for(let numero = 1; numero <= 10; numero ++){
    console.log(`Contagem de numeros ${numero}`)
}