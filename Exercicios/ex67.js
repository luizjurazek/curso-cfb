// Função para ler um vetor de tamanho especificado
function lerVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = parseInt(prompt(`Digite o valor para a posição ${i + 1}:`));
    }
    return vetor;
}

// Função para copiar o maior valor de dois vetores para um terceiro vetor
function copiarMaiorValor(vetor1, vetor2) {
    let vetorResultado = [];
    for (let i = 0; i < vetor1.length; i++) {
        vetorResultado[i] = Math.max(vetor1[i], vetor2[i]);
    }
    return vetorResultado;
}

// Lendo dois vetores de 10 posições
let primeiroVetor = lerVetor(10);
let segundoVetor = lerVetor(10);

// Copiando o maior valor de cada posição para um terceiro vetor
let terceiroVetor = copiarMaiorValor(primeiroVetor, segundoVetor);

// Imprimindo o terceiro vetor
console.log("Terceiro Vetor:", terceiroVetor);