// Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias.

const dataDeNascimento = new Date('2002-03-23')

function calcularIdadeEmDias(dataDeNascimento){
    const dataAtual = new Date()
    const diffEmMilissegundos = dataAtual - dataDeNascimento
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000 // Um dia tem 24h, 1h tem 60 minutos, 1m tem 60 segundos e 1segundo 1000 milisegundos
    const idadeEmDias = Math.floor(diffEmMilissegundos / umDiaEmMilissegundos)
    return idadeEmDias
}

function calcularAnosMesesEdias(dataDeNascimentoEmDias){
    let totalDias = dataDeNascimentoEmDias
    let anos = Math.round(totalDias / 365 )
    let diasRestantes = totalDias % 365
    let meses = Math.round(diasRestantes / 30) 
    let dias = diasRestantes % 30
    console.log("Anos: " + anos + " Meses: " + meses + " Dias: " + dias)
}

let dias = calcularIdadeEmDias(dataDeNascimento)
calcularAnosMesesEdias(dias)





