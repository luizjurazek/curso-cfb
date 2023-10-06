// 27. Escreva um programa que leia 3 números e calcule a média ponderada entre eles.
// Considere que o maior número recebe peso 5 e os outros dois recebem peso 2,5.
// Solicita ao usuário para inserir três números
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

// Calcula a média ponderada
let peso1 = 5;
let peso2 = 2.5;

let mediaPonderada = (num1 * peso1 + num2 * peso2 + num3 * peso2) / (peso1 + 2 * peso2);

// Imprime a média ponderada
console.log("A média ponderada dos números é: " + mediaPonderada);