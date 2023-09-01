// Um programa para gerenciar os saques de um caixa eletrônico deve possuir algum
// mecanismo para decidir o número de notas de cada valor que deve ser disponibilizado
// para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima"
// no sentido de que as notas de menor valor fossem distribuídas em número mínimo
// possível. Por exemplo, se a quantia solicitada fosse R$ 87,00, o programa deveria indicar
// uma nota de R$ 50,00, três notas de R$ 10,00, uma nota de R$ 5,00 e duas notas de R$
// 1,00. Escreva um programa que receba o valor da quantia solicitada e retorne a
// distribuição das notas de acordo com o critério da distribuição ótima (considere existir
// notas de R$1,00; R$2,00; R$5,00; R$10,00; R$20,00; R$50,00 e R$100,00).


function saqueEletronico(valor){
    let valorSaque = valor
    let notas_disponiveis = [100, 50, 20, 10, 5, 2, 1]
    let distribuicao = {}
    let qtd_notas

    for(nota in notas_disponiveis){
        qtd_notas = Math.floor(valorSaque / nota)   
        if(qtd_notas > 0){
            distribuicao[nota] = qtd_notas
            valor -= qtd_notas * nota
        }
    }

    console.log(distribuicao)
}

saqueEletronico(150)

