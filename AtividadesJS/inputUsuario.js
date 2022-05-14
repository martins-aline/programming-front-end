let entrada = require("readline-sync");
let idade = entrada.question("Qual sua idade? ");
if (idade >= 18) {
  console.log("Você é maior de idade!");
} else {
  console.log("você é menor de idade!");
}
