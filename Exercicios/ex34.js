function verificarEmprestimo(rendaMensal, valorEmprestimo, numeroPrestacoes) {
    // Calcula o valor máximo do empréstimo (10 vezes a renda mensal)
    let valorMaximoEmprestimo = 10 * rendaMensal;

    // Calcula o valor máximo da prestação (30% da renda mensal)
    let valorMaximoPrestacao = 0.3 * rendaMensal;

    // Verifica se o valor do empréstimo é até dez vezes a renda mensal
    // e se o valor da prestação é no máximo 30% da renda mensal
    if (valorEmprestimo <= valorMaximoEmprestimo && (valorEmprestimo / numeroPrestacoes) <= valorMaximoPrestacao) {
        return "Empréstimo concedido!";
    } else {
        return "Empréstimo não concedido.";
    }
}

// Exemplo de uso
let rendaMensal = parseFloat(prompt("Digite a renda mensal: "));
let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo solicitado: "));
let numeroPrestacoes = parseInt(prompt("Digite o número de prestações desejadas: "));

let resultado = verificarEmprestimo(rendaMensal, valorEmprestimo, numeroPrestacoes);

console.log(resultado);