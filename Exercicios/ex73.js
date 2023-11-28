// Função para calcular a moda de um array
function calcularModa(array) {
    let contagem = {};
    
    // Conta a frequência de cada elemento
    array.forEach(elemento => {
        contagem[elemento] = (contagem[elemento] || 0) + 1;
    });

    // Encontra o elemento mais frequente
    let moda = null;
    let maxFrequencia = 0;

    for (let elemento in contagem) {
        if (contagem[elemento] > maxFrequencia) {
            moda = elemento;
            maxFrequencia = contagem[elemento];
        }
    }

    return moda;
}

// Função para calcular a mediana de um array
function calcularMediana(array) {
    let ordenado = array.slice().sort((a, b) => a - b);

    if (ordenado.length % 2 === 0) {
        // Se o comprimento do array for par, calcula a média dos dois elementos centrais
        let meio1 = ordenado.length / 2 - 1;
        let meio2 = ordenado.length / 2;
        return (ordenado[meio1] + ordenado[meio2]) / 2;
    } else {
        // Se o comprimento do array for ímpar, retorna o elemento central
        let meio = Math.floor(ordenado.length / 2);
        return ordenado[meio];
    }
}

// Função para calcular a média de um array
function calcularMedia(array) {
    let soma = array.reduce((total, elemento) => total + elemento, 0);
    return soma / array.length;
}

// Função principal
function main() {
    // Lendo um array de 20 inteiros (pode ser personalizado conforme necessário)
    let array = [2, 5, 3, 8, 7, 2, 9, 10, 5, 3, 2, 8, 4, 6, 7, 9, 1, 5, 6, 3];

    // Calculando e exibindo a moda
    let moda = calcularModa(array);
    console.log(`A moda do array é: ${moda}`);

    // Calculando e exibindo a mediana
    let mediana = calcularMediana(array);
    console.log(`A mediana do array é: ${mediana}`);

    // Calculando e exibindo a média
    let media = calcularMedia(array);
    console.log(`A média do array é: ${media}`);
}

// Chamando a função principal
main();