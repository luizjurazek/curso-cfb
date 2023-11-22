function calcularEuler(n) {
    let euler = 1; // Inicia com o primeiro termo (1/0! = 1)
    let denominador = 1;
  
    for (let i = 1; i < n; i++) {
      denominador *= i; // Calcula o fatorial
      euler += 1 / denominador; // Adiciona o próximo termo à soma
    }
  
    return euler;
  }
  
  // Solicita o número de termos ao usuário
  const n = parseInt(prompt("Digite o número de termos (n):"));
  
  // Calcula e exibe o resultado
  const resultado = calcularEuler(n);
  console.log(`O número de Euler (e) com ${n} termos é: ${resultado}`);