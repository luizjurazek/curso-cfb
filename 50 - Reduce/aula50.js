const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let arrayAnterior = []
let arrayAtual = []
let dobro = []

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evt)=> {
   resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao)=>{
        arrayAnterior.push(anterior)
        arrayAtual.push(atual)
        dobro.push(atual * 2)
        return anterior + atual
   })

   console.log("Anterior: " + arrayAnterior)
   console.log("Atual: " + arrayAtual)
   console.log("Dobro: " + dobro)

})

