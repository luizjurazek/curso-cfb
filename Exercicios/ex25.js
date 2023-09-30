// 25. Escreva um programa que leia o número equivalente ao mês e imprima a quantidade de
// dias deste mês.

// Solicita ao usuário o número equivalente ao mês
const numeroMes = parseInt(prompt("Digite o número do mês (1 a 12):"));

// Função para obter a quantidade de dias em um mês
function obterQuantidadeDiasNoMes(numeroMes) {
  switch (numeroMes) {
    case 1: // Janeiro
    case 3: // Março
    case 5: // Maio
    case 7: // Julho
    case 8: // Agosto
    case 10: // Outubro
    case 12: // Dezembro
      return 31;
    case 4: // Abril
    case 6: // Junho
    case 9: // Setembro
    case 11: // Novembro
      return 30;
    case 2: // Fevereiro
      return 28; // Note que não estamos considerando anos bissextos para simplificar
    default:
      return "Mês inválido";
  }
}

// Verifica e imprime a quantidade de dias ou uma mensagem de erro
const quantidadeDias = obterQuantidadeDiasNoMes(numeroMes);

if (typeof quantidadeDias === 'number') {
  console.log(`O mês ${numeroMes} tem ${quantidadeDias} dias.`);
} else {
  console.log(quantidadeDias);
}