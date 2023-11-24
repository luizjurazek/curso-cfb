// Função para contar números pares em um array
function contarNumerosPares(array) {
    let contadorPares = 0;
  
    for (let i = 0; i < array.length; i++) {
      // Verifica se o número é par
      if (array[i] % 2 === 0) {
        contadorPares++;
      }
    }
  
    return contadorPares;
  }
  
  // Função principal
  function main() {
    // Array de 10 posições
    let meuArray = [2, 5, 8, 12, 7, 14, 3, 10, 6, 9];
  
    // Chama a função para contar números pares
    let quantidadePares = contarNumerosPares(meuArray);
  
    // Imprime a quantidade de números pares
    console.log("Quantidade de números pares: " + quantidadePares);
  }
  
  // Chama a função principal
  main();