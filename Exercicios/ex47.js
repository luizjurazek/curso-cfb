function calculaRestoDivisao(A, B) {
    // Verifica se B é igual a zero, o que resultaria em uma divisão por zero
    if (B === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }

    while (A >= B) {
        A -= B;
    }

    return A;
}

// Solicita ao usuário que insira os valores de A e B
const A = parseInt(prompt("Digite o valor de A (dividendo):"));
const B = parseInt(prompt("Digite o valor de B (divisor):"));

// Chama a função para calcular o resto da divisão e exibe o resultado
const resultado = calculaRestoDivisao(A, B);
console.log(`O resto da divisão de ${A} por ${B} é: ${resultado}`);