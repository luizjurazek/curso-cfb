// 26. Escreva um programa que leia 3 valores e escreva a soma dos 2 maiores.
// Solicita ao usuário para inserir três números
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

// Verifica os dois maiores números
let maior, segundoMaior;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
    segundoMaior = Math.max(num2, num3);
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
    segundoMaior = Math.max(num1, num3);
} else {
    maior = num3;
    segundoMaior = Math.max(num1, num2);
}

// Calcula e imprime a soma dos dois maiores números
let soma = maior + segundoMaior;
console.log("A soma dos dois maiores números é: " + soma);