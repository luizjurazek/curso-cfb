function calcularDivisoresProprios(numero) {
    let divisores = [1];
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
      if (numero % i === 0) {
        divisores.push(i);
      }
    }
    return divisores;
  }
  
  function saoAmigos(numero1, numero2) {
    const divisoresNumero1 = calcularDivisoresProprios(numero1);
    const somaDivisoresNumero1 = divisoresNumero1.reduce((a, b) => a + b, 0);
  
    const divisoresNumero2 = calcularDivisoresProprios(numero2);
    const somaDivisoresNumero2 = divisoresNumero2.reduce((a, b) => a + b, 0);
  
    return somaDivisoresNumero1 === numero2 && somaDivisoresNumero2 === numero1;
  }
  
  // Exemplo de uso:
  const numeroA = 17296;
  const numeroB = 18416;
  
  if (saoAmigos(numeroA, numeroB)) {
    console.log(`${numeroA} e ${numeroB} são números amigos.`);
  } else {
    console.log(`${numeroA} e ${numeroB} não são números amigos.`);
  }