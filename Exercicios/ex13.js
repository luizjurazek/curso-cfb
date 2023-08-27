// Um circuito elétrico é composto de duas resistências R1 e R2 em paralelo, e ambas em
// sequência de uma resistência R3. Faça um algoritmo para calcular a resistência
// equivalente desse circuito.


function resistenciaEquivalenteCircuitoParalelo(r1, r2, r3){
    let resUm = r1
    let resDois = r2
    let resTres = r3

    let resEquivalenteParalelo = (resUm * resDois) / (resUm + resDois)
    let resEquivalenteTotal =  resEquivalenteParalelo + resTres


    console.log("A resistência equivalente do circuito é: " + resEquivalenteTotal)
}

