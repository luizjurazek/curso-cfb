// Função para verificar se um número é primo
function isPrime(number) {
    // Se o número for menor ou igual a 1, não é primo
    if (number <= 1) {
        return false;
    }

    // Verifica se o número é divisível por qualquer número de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // Se for divisível, não é primo
            return false;
        }
    }

    // Se não foi divisível por nenhum número, é primo
    return true;
}

// Solicita ao usuário que insira um número
let userInput = prompt("Digite um número: ");
let number = parseInt(userInput);

// Verifica se o número é primo e exibe o resultado
if (isPrime(number)) {
    console.log(number + " é um número primo.");
} else {
    console.log(number + " não é um número primo.");
}