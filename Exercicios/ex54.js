function ehTriangular(numero) {
    let produto = 1;
    let i = 1;
  
    while (produto < numero) {
      produto = i * (i + 1) * (i + 2);
      i++;
    }
  
    return produto === numero;
  }
  
  // Exemplo de uso:
  const numeroVerificar = 24;
  const resultado = ehTriangular(numeroVerificar);
  
  if (resultado) {
    console.log(`${numeroVerificar} é um número triangular.`);
  } else {
    console.log(`${numeroVerificar} não é um número triangular.`);
  }