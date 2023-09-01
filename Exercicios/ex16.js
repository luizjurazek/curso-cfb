// Escreva um programa para gerar o invertido de um número com três algarismos
// (exemplo: o invertido de 498 é 894).

function numReverse(num){
    let numero = num
    let numInvertido = numero.toString().split('').reverse().join('')
    console.log(numInvertido)
}

numReverse(123)