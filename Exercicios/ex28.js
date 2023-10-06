// 28. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante.
// Solicita ao usuário para inserir uma letra
let letra = prompt("Digite uma letra:").toLowerCase(); // Converte para minúscula para facilitar a comparação

// Verifica se a letra é vogal ou consoante
if (letra.length === 1 && letra.match(/[a-z]/i)) {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("A letra digitada é uma vogal.");
    } else {
        console.log("A letra digitada é uma consoante.");
    }
} else {
    console.log("Por favor, digite apenas uma letra válida.");
}