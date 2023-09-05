// const s1 = Symbol()
// const s2 = Symbol()
// const s3 = Symbol.for("luiz")

// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s1 == s2)

// console.log(Symbol.keyFor(s3))


// class Jogador {
//     constructor(nome){
//         this.nome = nome,
//         this.id = Symbol()
//     }
// }

// let jogadores = [new Jogador("Jorge"), new Jogador("Romero"), new Jogador("Renato Augusto"), new Jogador("Roger guedes"), new Jogador("Fagner")]

// let s1 = jogadores[2].id

// console.log(s1)

// console.log(jogadores)

// jogadores = jogadores.filter((jogador) => {
//     return jogador.id != s1
// })

// console.log(jogadores)

const nome = Symbol("Luiz Jurazek")
const numero = Symbol("numero")
const corUniforme = Symbol("Cor uniforme")

const Jogador = {
    nome: "Luiz Jurazek",
}

Jogador[numero] = 10;
Jogador[corUniforme] = "Preto";

for(propriedade in Jogador){
    console.log(propriedade)
}


console.log(Jogador)



