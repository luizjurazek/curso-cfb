function numeroPorExtenso(numero) {
    const numerosPorExtenso = [
        "", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove",
        "Dez", "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete",
        "Dezoito", "Dezenove", "Vinte", "Vinte e Um", "Vinte e Dois", "Vinte e Três",
        "Vinte e Quatro", "Vinte e Cinco", "Vinte e Seis", "Vinte e Sete", "Vinte e Oito",
        "Vinte e Nove", "Trinta", "Trinta e Um", "Trinta e Dois", "Trinta e Três",
        "Trinta e Quatro", "Trinta e Cinco", "Trinta e Seis", "Trinta e Sete", "Trinta e Oito",
        "Trinta e Nove", "Quarenta", "Quarenta e Um", "Quarenta e Dois", "Quarenta e Três",
        "Quarenta e Quatro", "Quarenta e Cinco", "Quarenta e Seis", "Quarenta e Sete",
        "Quarenta e Oito", "Quarenta e Nove", "Cinquenta", "Cinquenta e Um",
        "Cinquenta e Dois", "Cinquenta e Três", "Cinquenta e Quatro", "Cinquenta e Cinco",
        "Cinquenta e Seis", "Cinquenta e Sete", "Cinquenta e Oito", "Cinquenta e Nove",
        "Sessenta", "Sessenta e Um", "Sessenta e Dois", "Sessenta e Três", "Sessenta e Quatro",
        "Sessenta e Cinco", "Sessenta e Seis", "Sessenta e Sete", "Sessenta e Oito",
        "Sessenta e Nove", "Setenta", "Setenta e Um", "Setenta e Dois", "Setenta e Três",
        "Setenta e Quatro", "Setenta e Cinco", "Setenta e Seis", "Setenta e Sete",
        "Setenta e Oito", "Setenta e Nove", "Oitenta", "Oitenta e Um", "Oitenta e Dois",
        "Oitenta e Três", "Oitenta e Quatro", "Oitenta e Cinco", "Oitenta e Seis",
        "Oitenta e Sete", "Oitenta e Oito", "Oitenta e Nove", "Noventa", "Noventa e Um",
        "Noventa e Dois", "Noventa e Três", "Noventa e Quatro", "Noventa e Cinco",
        "Noventa e Seis", "Noventa e Sete", "Noventa e Oito", "Noventa e Nove", "Cem"
    ];

    if (numero < 1 || numero > 100) {
        return "Número fora do intervalo de 1 a 100.";
    }

    return numerosPorExtenso[numero];
}

// Exemplo de uso
const numero = 42;
console.log(`${numero} por extenso: ${numeroPorExtenso(numero)}`);