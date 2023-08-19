//Filtra um array e devolve um novo array filtrado
const idade = [ 15, 21, 30, 58, 22, 44, 5, 12, 30 ]
const menorIdade = idade.filter((el) => {
     return el <= 18
})
console.log(menorIdade)





const idades2 = [20, 18, 19, 35, 43, 18, 10, 8, 12, 99]
const filtroMaior18 = (valor) => {
    if (valor >= 18){
        return valor
    }
}
const maiorIdade = idades2.filter(filtroMaior18)
console.log(maiorIdade)