function calcularPi(N) {
    let pi = 1; // Inicia com o primeiro termo (1/0! = 1)
    let sinal = -1; // Alterna o sinal para cada termo subsequente
    let denominador = 3;
  
    for (let i = 1; i < N; i++) {
      pi += sinal * (1 / fatorial(denominador));
      sinal *= -1; // Inverte o sinal para o próximo termo
      denominador += 2; // Incrementa o denominador para o próximo termo
    }
  
    return pi * 4; // Multiplica por 4 para obter uma aproximação para π
  }
  
  // Função para calcular o fatorial de um número
  function fatorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  }
  
  // Solicita o número de termos ao usuário
  const N = parseInt(prompt("Digite o número de termos (N):"));
  
  // Calcula e exibe o resultado
  const resultado = calcularPi(N);
  console.log(`A aproximação para π com ${N} termos é: ${resultado}`);