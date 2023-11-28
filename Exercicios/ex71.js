// Função para realizar a busca sequencial
function buscaSequencial(vetor, valor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === valor) {
            return i;  // Retorna a primeira posição onde o valor é encontrado
        }
    }
    return -1;  // Retorna -1 se o valor não for encontrado no vetor
}

// Função principal
function main() {
    // Criando um vetor de 10 posições de inteiros (pode ser personalizado conforme necessário)
    let vetor = [5, 8, 2, 10, 7, 1, 3, 6, 4, 9];

    // Solicitando ao usuário um inteiro para buscar no vetor
    let valor = parseInt(prompt("Digite um inteiro para buscar no vetor:"));

    // Chamando a função de busca sequencial
    let posicao = buscaSequencial(vetor, valor);

    // Exibindo o resultado
    if (posicao !== -1) {
        console.log(`O valor ${valor} foi encontrado na posição ${posicao}.`);
    } else {
        console.log(`O valor ${valor} não foi encontrado no vetor.`);
    }
}

// Chamando a função principal
main();