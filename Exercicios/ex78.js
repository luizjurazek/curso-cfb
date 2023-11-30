// Função para contar o número de ocorrências de um caractere em uma string
function contarOcorrencias(str, caractere) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === caractere) {
        count++;
      }
    }
  
    return count;
  }
  
  // Função para ler a string e o caractere, contar as ocorrências e imprimir o resultado
  function processarString() {
    // Lê a string do usuário
    let entradaString = prompt('Digite uma string: ');
  
    // Lê o caractere do usuário (considera apenas o primeiro caractere inserido)
    let entradaCaractere = prompt('Digite um caractere: ')[0];
  
    // Converte a string para minúsculas e o caractere para minúsculas para tornar a comparação insensível a maiúsculas e minúsculas
    entradaString = entradaString.toLowerCase();
    entradaCaractere = entradaCaractere.toLowerCase();
  
    // Conta o número de ocorrências
    let ocorrencias = contarOcorrencias(entradaString, entradaCaractere);
  
    // Imprime o resultado
    console.log(`Número de ocorrências de "${entradaCaractere}" na string: ${ocorrencias}`);
  }
  
  // Chama a função para processar a string
  processarString();