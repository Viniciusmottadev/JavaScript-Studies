"use strict";

/*Variaveis:
variaveis são espaços na memoria do computador que armazenam valores, podendo ser alterados durante a execução do programa.

VAR/LET/CONST

*/

// variavel global, pode ser alterada e redeclarada quantas vezes forem necessarias.

var nome = "Nicole";
console.log(nome);

// let serve para declarar variáveis cujo valor pode ser alterado ao longo do código, tendo como principal característica o escopo de bloco.

function teste() {
  let nome = "José";
  if (true) {
    console.log("dentro do if teste: " + nome);
  }
  console.log("dentro de teste: " + nome);
}

teste();

console.log("fora de teste: " + nome); // Gera ReferenceError: nome is not defined.

// const serve para declarar variáveis cujo o valor não pode ser alterado ao longo do programa.

const ling = "JavaScript";
console.log(ling);
