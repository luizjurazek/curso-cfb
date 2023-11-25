// Função para encontrar o menor e o maior valor em um array, junto com suas posições
function encontrarMenorMaiorComPosicoes(array) {
    // Inicializar variáveis para o menor e o maior valor e suas posições
    let menor = array[0];
    let posicaoMenor = 0;
    let maior = array[0];
    let posicaoMaior = 0;

    // Iterar sobre o array para encontrar o menor e o maior valor
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            posicaoMenor = i;
        }
        if (array[i] > maior) {
            maior = array[i];
            posicaoMaior = i;
        }
    }

    // Retornar um objeto contendo o menor e o maior valor, juntamente com suas posições
    return { menor: { valor: menor, posicao: posicaoMenor }, maior: { valor: maior, posicao: posicaoMaior } };
}

// Array de 20 inteiros (você pode modificar os valores conforme necessário)
const meuArray = [5, 8, 3, 12, 7, 20, 15, 6, 10, 2, 18, 14, 9, 11, 4, 1, 16, 19, 13, 17];

// Chamar a função para encontrar o menor e o maior valor, junto com suas posições
const resultado = encontrarMenorMaiorComPosicoes(meuArray);

// Imprimir os resultados
console.log("Menor valor:", resultado.menor.valor, "na posição:", resultado.menor.posicao);
console.log("Maior valor:", resultado.maior.valor, "na posição:", resultado.maior.posicao);