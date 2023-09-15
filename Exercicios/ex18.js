// Escreva um programa que permute o valor de duas variáveis inteiras.

function permutaValores(val1, val2){
    let valorUm = val1
    let valorDois = val2
    let auxiliar;

    console.log("Valor um antes da permuta: " + valorUm)
    console.log("Valor dois antes da permuta: " + valorDois)

    auxiliar = valorUm
    valorUm = valorDois
    valorDois = auxiliar

    console.log("Valor um depois da permuta: " + valorUm)
    console.log("Valor dois depois da permuta: " + valorDois)
}

permutaValores(5, 6)