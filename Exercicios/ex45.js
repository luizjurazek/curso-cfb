// Inicializando a variável para armazenar a soma
let soma = 0;

// Loop para ler 5 números
for (let i = 1; i <= 5; i++) {
  // Solicita a entrada do usuário e converte para número
  let numero = parseFloat(prompt("Digite o número " + i + ":"));

  // Verifica se a entrada é um número válido
  if (!isNaN(numero)) {
    soma += numero; // Adiciona o número à soma
  } else {
    // Se a entrada não for válida, pede para o usuário inserir novamente
    console.log("Por favor, digite um número válido.");
    i--; // Decrementa o contador para repetir a iteração
  }
}

// Calcula a média
let media = soma / 5;

// Imprime a média no console
console.log("A média dos números é: " + media);