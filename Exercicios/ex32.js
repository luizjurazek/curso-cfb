function verificarCaractere(caractere) {
    // Verifica se é uma vogal
    if (/^[aeiou]$/i.test(caractere)) {
        return "Vogal";
    }

    // Verifica se é uma consoante
    if (/^[bcdfghjklmnpqrstvwxyz]$/i.test(caractere)) {
        return "Consoante";
    }

    // Verifica se é um número
    if (/^\d$/.test(caractere)) {
        return "Número";
    }

    // Se não for nenhum dos anteriores, considera como símbolo
    return "Símbolo";
}

// Exemplo de uso
let caractere = prompt("Digite um caractere: ");

let tipoCaractere = verificarCaractere(caractere);

console.log(`O caractere "${caractere}" é um(a) ${tipoCaractere}.`);