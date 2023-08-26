// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
// seu raio e sua altura.

function volumeLataDeOleo(raio, altura){
    const pi = Math.PI
    const areaBase = pi * raio ** 2;
    const volume = areaBase * altura

    console.log("O Volume é: " + volume + " unidade cúbicas")
}

volumeLataDeOleo(5, 10)

