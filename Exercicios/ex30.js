// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Álcool Até 25 litros, desconto de 2% por litro
// Acima de 25 litros, desconto de 4% por litro
// Gasolina Até 25 litros, desconto de 3% por litro
// Acima de 25 litros, desconto de 5% por litro
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível
// (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser
// pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,70 e o preço do litro
// do álcool é R$ 1,90.

function valorGasolina(quantidadeDeLitros, tipoDeCombustivel) {
    let desconto;
    let preco;
    let precoComDesconto;
    let valorPagar;
    if (quantidadeDeLitros <= 25 && tipoDeCombustivel == "alcool") {
        desconto = 2
        preco = 1.90
        precoComDesconto = preco - ((preco * desconto) / 100)
        valorPagar = quantidadeDeLitros * precoComDesconto
        console.log(precoComDesconto)
        console.log("Valor a pagar R$" + valorPagar.toFixed(2))
    } else if (quantidadeDeLitros > 25 && tipoDeCombustivel == "alcool") {
        desconto = 3
        preco = 1.9
        0
        precoComDesconto = preco - ((preco * desconto) / 100)
        valorPagar = quantidadeDeLitros * precoComDesconto
        console.log(precoComDesconto)
        console.log("Valor a pagar R$" + valorPagar.toFixed(2))
    }

    if (quantidadeDeLitros <= 25 && tipoDeCombustivel == "gasolina") {
        desconto = 5
        preco = 2.70
        precoComDesconto = preco - ((preco * desconto) / 100)
        valorPagar = quantidadeDeLitros * precoComDesconto
        console.log(precoComDesconto)
        console.log("Valor a pagar R$" + valorPagar.toFixed(2))
    } else if (quantidadeDeLitros > 25 && tipoDeCombustivel == "gasolina") {
        desconto = 4
        preco = 2.70
        precoComDesconto = preco - ((preco * desconto) / 100)
        valorPagar = quantidadeDeLitros * precoComDesconto
        console.log(precoComDesconto)
        console.log("Valor a pagar R$" + valorPagar.toFixed(2))
    }
}

valorGasolina(26, "alcool")