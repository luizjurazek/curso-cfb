// Escreva um programa que leia um número e imprima se este número é ou não par.

function impOuPar(num){
    let numero = num
    

    if(numero%2 == 0){
        console.log("Par")
    } else {
        console.log("Impar")
    }
}

impOuPar(15)