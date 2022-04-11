/* Programa que receba a idade de uma pessoa em anos e imprime a idade em: meses, dias, horas e minutos.*/

//entrada:

let idade = 50;

// Processamento:

let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24;
let idadeMinutos = idadeHoras * 60;

// Saída:

console.log("A idade em meses é " + idadeMeses);
console.log("A idade em dias é " + idadeDias);
console.log("A idade em horas é " + idadeHoras);
console.log("A idade em minutos é " + idadeHoras);
