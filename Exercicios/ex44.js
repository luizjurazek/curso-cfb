// Inicializando a variável para armazenar a soma
let soma = 0;

// Loop que imprime números de 1 a 100 e calcula a soma
for (let i = 1; i <= 100; i++) {
  console.log(i);
  soma += i; // Adiciona o valor atual de i à soma
}

// Imprime a soma no final
console.log("A soma de todos os números é: " + soma);