function verificaSubstring(string1, string2) {
    // Verificar se a primeira string contém a segunda
    const contemSubstring = string1.includes(string2);

    // Retornar o resultado
    return contemSubstring;
}

// Exemplo de uso
const string1 = "Esta é uma string de exemplo";
const string2 = "string";

const resultado = verificaSubstring(string1, string2);

if (resultado) {
    console.log("A primeira string contém a segunda.");
} else {
    console.log("A primeira string não contém a segunda.");
}