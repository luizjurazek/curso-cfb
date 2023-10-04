// Escreva um programa que calcule a raiz de uma equação do primeiro grau

function raizPrimeiroGrau(valorA, valorB){
    if(valorA === 0){
        console.log("Isso não é uma equação do primeiro grau, 'a' não pode ser igual a zero.");
    } else {
        let x = -valorB / valorA
        console.log("A raiz da equação é x = " + x);
    }
}

raizPrimeiroGrau(20, 15)