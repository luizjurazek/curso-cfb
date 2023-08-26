// Converter um inteiro informado menor que 32 para sua representação em binário

function converterInteiroEmBinario(numero){
    if(numero < 0 ||  numero >= 32){
        console.log("O número precisar ser maior que 0 e menor que 32")
    }

    if(numero == 0){
        console.log("0")
    }


    let valor = numero
    let binario = ''

    while(valor > 0){
        const rest = valor % 2
        binario = rest + binario
        valor = Math.floor(valor / 2)
    }

    console.log("O número " + numero + " em binário é: " + binario)
}

converterInteiroEmBinario(28)