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