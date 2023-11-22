function calcularS(N) {
    let soma = 1; // Inicializa a soma com o primeiro termo (1/0! = 1)
    let fatorial = 1;
  
    for (let i = 1; i <= N; i++) {
      fatorial *= i; // Calcula o fatorial
      soma += 1 / fatorial; // Adiciona o próximo termo à soma
    }
  
    return soma;
  }
  
  // Solicita o número de termos ao usuário
  const N = parseInt(prompt("Digite o número de termos (N):"));
  
  // Calcula e exibe o resultado
  const resultado = calcularS(N);
  console.log(`O resultado para ${N} termos é: ${resultado}`);