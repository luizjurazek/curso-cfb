// Função para imprimir o vetor
function imprimirVetor(vetor) {
    console.log(`Vetor: [${vetor.join(', ')}]`);
}

// Função para inserir um elemento no final do vetor
function inserirNoFinal(vetor, elemento) {
    vetor.push(elemento);
}

// Função para inserir um elemento em uma dada posição
function inserirNaPosicao(vetor, elemento, posicao) {
    vetor.splice(posicao, 0, elemento);
}

// Função para remover um elemento de uma posição indicada
function removerDaPosicao(vetor, posicao) {
    vetor.splice(posicao, 1);
}

// Função para remover todos elementos iguais a um valor indicado
function removerElementoIgual(vetor, valor) {
    vetor = vetor.filter(elemento => elemento !== valor);
    return vetor;
}

// Função para gerar um novo array sem duplicidades
function removerDuplicidades(vetor) {
    return Array.from(new Set(vetor));
}

// Função principal
function main() {
    let vetor = [];  // Vetor inicial vazio

    // Inserindo elementos no final do vetor
    inserirNoFinal(vetor, 10);
    inserirNoFinal(vetor, 20);
    inserirNoFinal(vetor, 30);

    // Imprimindo o vetor após a inserção
    imprimirVetor(vetor);

    // Inserindo um elemento na posição 1
    inserirNaPosicao(vetor, 15, 1);

    // Imprimindo o vetor após a inserção na posição
    imprimirVetor(vetor);

    // Removendo o elemento da posição 2
    removerDaPosicao(vetor, 2);

    // Imprimindo o vetor após a remoção
    imprimirVetor(vetor);

    // Removendo todos elementos iguais a 15
    vetor = removerElementoIgual(vetor, 15);

    // Imprimindo o vetor após a remoção por valor
    imprimirVetor(vetor);

    // Gerando um novo array sem duplicidades
    let novoVetor = removerDuplicidades(vetor);

    // Imprimindo o novo vetor sem duplicidades
    imprimirVetor(novoVetor);
}

// Chamando a função principal
main();
