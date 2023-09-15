// Escreva um programa que leia um número e exiba se ele é positivo ou negativo

function positivoOuNegativo(num){
    if (num == 0){
        console.log("Neutro")
    } else if(num > 0){
        console.log("Positivo")
    } else {
        console.log("Negativo ")
    }
}

positivoOuNegativo(10)