// Escreva um programa que calcula o desconto previdenciário de um funcionário. Dado um
// salário, o programa deve retornar o valor do desconto proporcional ao mesmo. O cálculo
// segue a regra: o desconto é de 11% do valor do salário, entretanto, o valor máximo de
// desconto é 334, o que seja menor.

function calcSalario(salarioBruto) {
    let salario = parseFloat(salarioBruto);
    let desconto = 11;
    let descMax = parseFloat(334.39);
    let calcDesconto = parseFloat((salario * desconto) / 100)

    if (calcDesconto < descMax) {
        console.log("O valor de desconto é R$" + calcDesconto.toFixed(2))
        console.log("O salário toal é de R$" + salario.toFixed(2) + " com desconto você vai receber R$" + (salario - calcDesconto).toFixed(2))


    } else {
        console.log("O valor de desconto excede o valor máximo de desconto de R$" + descMax.toFixed(2))
        console.log("O desconto atribuído é de R$" + descMax.toFixed(2))
        console.log("O salario total é de R$" + salario.toFixed(2) + " com o desconto você vai receber R$" + (salario - descMax).toFixed(2))
    }
}

calcSalario(4599.23)