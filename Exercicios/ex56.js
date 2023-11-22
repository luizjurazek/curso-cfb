function eNumeroPerfeito(n) {
    // Verifica se o número é positivo
    if (n <= 0) {
      return false;
    }
  
    // Encontra os divisores próprios e calcula a soma
    let somaDivisores = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        somaDivisores += i;
      }
    }
  
    // Verifica se a soma dos divisores é igual ao número
    return somaDivisores === n;
  }
  
  // Exemplos de uso
  console.log(eNumeroPerfeito(6)); // Deve imprimir true
  console.log(eNumeroPerfeito(28)); // Deve imprimir true
  console.log(eNumeroPerfeito(12)); // Deve imprimir false