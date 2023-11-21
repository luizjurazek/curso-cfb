function gerarFettuccine(termo1, termo2, quantidade) {
    let serie = [termo1, termo2];
  
    for (let i = 2; i < quantidade; i++) {
      if (i % 2 === 0) {
        // Para i par: Ai = Ai-1 - Ai-2
        serie[i] = serie[i - 1] - serie[i - 2];
      } else {
        // Para i ímpar: Ai = Ai-1 + Ai-2
        serie[i] = serie[i - 1] + serie[i - 2];
      }
    }
  
    return serie;
  }
  
  // Exemplo de uso:
  const termo1 = 1;
  const termo2 = 2;
  const quantidadeDeTermos = 7;
  
  const resultado = gerarFettuccine(termo1, termo2, quantidadeDeTermos);
  console.log(resultado); // Saída esperada: [1, 2, 3, 1, 4, 5, -1]