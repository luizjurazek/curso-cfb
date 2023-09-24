function moduloDoNum(num) {
    // Usando a função Math.abs para obter o valor absoluto do número
    var modulo = Math.abs(num);
    
    // Exibindo o resultado
    console.log("O módulo de " + num + " é " + modulo);
}

// Exemplo de uso da função
var numero = -5;
moduloDoNum(numero); // Isso exibirá "O módulo de -5 é 5" no console