function calcularCombinacoes(somaDesejada) {
    // Inicializa um array para armazenar as combinações
    let combinacoes = [];

    // Loop pelos valores dos dados
    for (let dado1 = 1; dado1 <= 6; dado1++) {
        for (let dado2 = 1; dado2 <= 6; dado2++) {
            // Verifica se a soma dos dados é igual ao número desejado
            if (dado1 + dado2 === somaDesejada) {
                combinacoes.push([dado1, dado2]);
            }
        }
    }

    return combinacoes;
}

// Solicita ao usuário que insira um número
let userInput = prompt("Digite um número para a soma desejada: ");
let somaDesejada = parseInt(userInput);

// Calcula e exibe as combinações
let combinacoes = calcularCombinacoes(somaDesejada);

if (combinacoes.length > 0) {
    console.log(`Combinações para a soma ${somaDesejada}:`);
    combinacoes.forEach(comb => {
        console.log(`${comb[0]} ${comb[1]}`);
    });
} else {
    console.log(`Não há combinações para a soma ${somaDesejada}.`);
}