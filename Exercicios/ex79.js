function gerarSubstring(stringOriginal, posicaoInicial, posicaoFinal) {
    // Verificar se as posições são válidas
    if (posicaoInicial < 0 || posicaoFinal > stringOriginal.length || posicaoInicial > posicaoFinal) {
        console.log("Posições inválidas.");
        return;
    }

    // Gerar a substring
    const substring = stringOriginal.substring(posicaoInicial, posicaoFinal + 1);
    return substring;
}

// Exemplo de uso
const stringOriginal = "Esta é uma string de exemplo";
const posicaoInicial = 5;
const posicaoFinal = 15;

const resultado = gerarSubstring(stringOriginal, posicaoInicial, posicaoFinal);

console.log(resultado);