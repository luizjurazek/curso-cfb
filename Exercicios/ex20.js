// Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada 
// maior do que ou igual às duas prestações, as quais devem ser iguais, inteiras e as maiores 
// possíveis. Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas 
// prestações são iguais a R$ 90,00; se o valor da mercadoria for R$ 302,75, a entrada é de 
// R$ 102,75 e as duas prestações são a iguais a R$ 100,00. Escreva um programa que 
// receba o valor da mercadoria e forneça o valor da entrada e das duas prestações, de 
// acordo com as regras acima. Observe que uma justificativa para a adoção desta regra é 
// que ela facilita a confecção e o consequente pagamento dos boletos das duas prestações

// Solicita ao usuário que insira o valor da mercadoria
var valorMercadoria = parseFloat(305);

// Verifica se o valor da mercadoria é válido (positivo)
if (valorMercadoria <= 0) {
  console.log("O valor da mercadoria deve ser maior que zero.");
} else {
  // Calcula o valor da entrada (maior ou igual às duas prestações)
  var entrada = Math.ceil(valorMercadoria / 3); // Arredonda para cima para garantir que a entrada seja maior ou igual às prestações

  // Calcula o valor das duas prestações
  var prestacao = Math.floor(valorMercadoria / 3); // Arredonda para baixo para garantir que as prestações sejam as maiores possíveis

  // Exibe os resultados
  console.log("Valor da entrada: R$" + entrada.toFixed(2));
  console.log("Valor das duas prestações: R$" + prestacao.toFixed(2));
}