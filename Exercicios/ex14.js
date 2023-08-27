// 14. Em uma cidade se deseja sincronizar os semáforos. Com isto, quando um semáforo abre
// (fica verde), os veículos que nele estavam parados tendem a encontrar os próximos
// semáforos também abertos. Para que isto seja feito, os próximos semáforos precisam
// abrir um pouco depois, dependendo da velocidade permitida na via e da distância entre
// eles. Assim, ao abrir o semáforo, um veículo começa a acelerar até atingir a velocidade
// permitida, que mantém até chegar ao próximo semáforo, levando um certo tempo para
// percorrer essa distância. Para que encontre o próximo semáforo aberto, este deve abrir
// um pouco antes da chegada do veículo (por ex: 3 segundos antes). Faça assim um
// algoritmo que informe quanto tempo depois um semáforo deve abrir, dada as seguintes
// informações:
// a. a distância desde o semáforo anterior
// b. a velocidade permitida da via
// c. a aceleração típica dos carros


function sincronizarSemaforos(distanciaSemaforo, velVia, velocidadeMedia){
    let distSemaforoEmMetros = distanciaSemaforo * 1000
    let maxVelViaEmMS = Math.round(velVia / 3.6)
    let velMediaEmMS = Math.round(velocidadeMedia / 3.6)

    console.log("Distância em metros: " + distSemaforoEmMetros)
    console.log("Velocidade máxima em m/s:  " + maxVelViaEmMS)
    console.log("Velocidade média em m/s: " + velMediaEmMS)

    // Quantos segundos preciso para percorrer a distancia a partir da velocidade maxima
    let tempoMaximo = Math.round(distSemaforoEmMetros / maxVelViaEmMS)
    let tempoMedio = Math.round(distSemaforoEmMetros / velMediaEmMS)
    console.log("O tempo máximo para chegar ao próximo sinal é de: " + tempoMaximo + "segundos")
    console.log("O tempo médio para chegar ao próximo sinal é de: " + tempoMedio + "segundos")
    console.log("Levando em conta a recomendação de que o semaforo deve abrir tres segundos antes")
    console.log("Para a velocidade máxima o semaforo deve abrir em: " + (tempoMaximo -3) + " segundos") 
    console.log("Para a velocidade média o semaforo deve abrir em: " + (tempoMedio -3) + " segundos") 
}



sincronizarSemaforos(1, 60, 30)

