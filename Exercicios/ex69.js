// Função para ler um vetor de inteiros
function lerVetor(tamanho) {
    const vetor = [];
    for (let i = 0; i < tamanho; i++) {
        // Substitua esta linha pelo código que lê os valores do vetor
        vetor.push(parseInt(prompt(`Digite o valor ${i + 1}:`)));
    }
    return vetor;
}

// Função para contar o número de ocorrências de um valor em um vetor
function contarOcorrencias(vetor, valor) {
    let contador = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === valor) {
            contador++;
        }
    }
    return contador;
}

// Tamanho do vetor
const tamanhoVetor = 15;

// Ler o vetor de inteiros
const vetorInteiros = lerVetor(tamanhoVetor);

// Ler o valor inteiro a ser buscado no vetor
const valorBuscado = parseInt(prompt("Digite o valor inteiro a ser buscado:"));

// Contar o número de ocorrências do valor no vetor
const ocorrencias = contarOcorrencias(vetorInteiros, valorBuscado);

// Imprimir o resultado
console.log(`O valor ${valorBuscado} ocorre ${ocorrencias} vezes no vetor.`);