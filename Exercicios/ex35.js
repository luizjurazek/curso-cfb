// Solicita ao usuário que insira um número inteiro de 1 a 7
var numero = parseInt(prompt("Digite um número inteiro de 1 a 7:"));

// Usa uma estrutura condicional para determinar o dia da semana correspondente
if (numero === 1) {
    var diaDaSemana = "Domingo";
} else if (numero === 2) {
    var diaDaSemana = "Segunda-feira";
} else if (numero === 3) {
    var diaDaSemana = "Terça-feira";
} else if (numero === 4) {
    var diaDaSemana = "Quarta-feira";
} else if (numero === 5) {
    var diaDaSemana = "Quinta-feira";
} else if (numero === 6) {
    var diaDaSemana = "Sexta-feira";
} else if (numero === 7) {
    var diaDaSemana = "Sábado";
} else {
    // Se o número não estiver no intervalo de 1 a 7, exibe uma mensagem de erro
    console.log("Erro: O número inserido não corresponde a um dia da semana válido.");
    // Encerra o programa
    return;
}

// Exibe o dia da semana correspondente
console.log("O dia da semana correspondente ao número " + numero + " é " + diaDaSemana + ".");