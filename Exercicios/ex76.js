function contarVogais(str) {
    // Converter a string para minúsculas para garantir a contagem correta de vogais
    var stringLowerCase = str.toLowerCase();

    // Inicializar contadores para cada vogal
    var contadorA = 0;
    var contadorE = 0;
    var contadorI = 0;
    var contadorO = 0;
    var contadorU = 0;

    // Iterar sobre cada caractere da string
    for (var i = 0; i < stringLowerCase.length; i++) {
        var caractere = stringLowerCase[i];

        // Verificar se o caractere é uma vogal e incrementar o contador apropriado
        switch (caractere) {
            case 'a':
                contadorA++;
                break;
            case 'e':
                contadorE++;
                break;
            case 'i':
                contadorI++;
                break;
            case 'o':
                contadorO++;
                break;
            case 'u':
                contadorU++;
                break;
        }
    }

    // Retornar um objeto com a contagem de cada vogal
    return {
        'a': contadorA,
        'e': contadorE,
        'i': contadorI,
        'o': contadorO,
        'u': contadorU
    };
}

// Exemplo de uso:
var minhaString = "Esta é uma string de exemplo";
var contagemVogais = contarVogais(minhaString);

console.log("Contagem de vogais:", contagemVogais);