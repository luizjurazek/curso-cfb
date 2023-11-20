function fibonacci(n) {
    let fibSeries = [];

    if (n >= 1) {
        fibSeries.push(1);
    }
    if (n >= 2) {
        fibSeries.push(1);
    }

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

// Solicita ao usuário que insira o valor de N
let userInput = prompt("Digite o valor de N para a série de Fibonacci: ");
let n = parseInt(userInput);

// Gera a série de Fibonacci até o N-ésimo termo
let fibSeries = fibonacci(n);

// Exibe a série de Fibonacci gerada
console.log(`Série de Fibonacci até o ${n}-ésimo termo:`);
console.log(fibSeries.join(', '));