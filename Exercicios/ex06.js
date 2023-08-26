// Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

function quocienteOfNumbers(numerador, denominador){
    let quociente = numerador / denominador
    let restoDaDivisao = Math.round(numerador % denominador)


    console.log(`Quociente de ${numerador} e ${denominador} é: ${quociente}`)
    console.log(`O resta da divisão de ${numerador} e ${denominador} é: ${restoDaDivisao}`)
}


quocienteOfNumbers(10, 2)