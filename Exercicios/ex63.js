// Função para somar dois vetores
function somarVetores(vetor1, vetor2) {
    let resultado = [];
  
    for (let i = 0; i < vetor1.length; i++) {
      // Soma os elementos correspondentes dos dois vetores
      resultado[i] = vetor1[i] + vetor2[i];
    }
  
    return resultado;
  }
  
  // Função principal
  function main() {
    // Vetores de números reais de mesma dimensão (10 posições)
    let vetor1 = [1.2, 3.4, 5.6, 7.8, 9.0, 2.1, 4.3, 6.5, 8.7, 0.9];
    let vetor2 = [0.9, 8.7, 6.5, 4.3, 2.1, 9.0, 7.8, 5.6, 3.4, 1.2];
  
    // Chama a função para somar os vetores
    let resultado = somarVetores(vetor1, vetor2);
  
    // Imprime o vetor resultante da soma
    console.log("Vetor resultante da soma:");
    console.log(resultado);
  }
  
  // Chama a