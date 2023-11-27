// Definindo um vetor de 10 posições
let vetorOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Criando um segundo vetor para armazenar a cópia
let vetorCopia = [];

// Copiando o conteúdo do vetor original para o vetor de cópia
for (let i = 0; i < vetorOriginal.length; i++) {
    vetorCopia[i] = vetorOriginal[i];
}

// Imprimindo o vetor de cópia
console.log("Vetor de Cópia:", vetorCopia);