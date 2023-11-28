// Função para realizar a busca binária
function buscaBinaria(vetor, valor) {
    let inicio = 0;
    let fim = vetor.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (vetor[meio] === valor) {
            return meio;  // Retorna a posição onde o valor é encontrado
        } else if (vetor[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;  // Retorna -1 se o valor não for encontrado no vetor
}

// Função principal
function main() {
    // Criando um vetor ordenado de 10 posições de inteiros (pode ser personalizado conforme necessário)
    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Solicitando ao usuário um inteiro para buscar no vetor
    let valor = parseInt(prompt("Digite um inteiro para buscar no vetor:"));

    // Chamando a função de busca binária
    let posicao = buscaBinaria(vetor, valor);

    // Exibindo o resultado
    if (posicao !== -1) {
        console.log(`O valor ${valor} foi encontrado na posição ${posicao}.`);
    } else {
        console.log(`O valor ${valor} não foi encontrado no vetor.`);
    }
}

// Chamando a função principal
main();