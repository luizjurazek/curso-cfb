const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [19, 25, 35, 22, 91, 20, 25]

p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt)=> {
   
    // Every retorna true ou false caso todos os elementos do array correspondam 
    // a regra descrita na funcao
    const ret = elementos_array.every((elemento, indice, array)=> {
        // Retorna true caso todos elementos do array sejam maior que 18
        if(elemento < 18){
            resultado.innerHTML = "Array não conforme na posição " + indice
        } 
        return elemento >= 18 
    })
   
    if(ret){
        resultado.innerHTML= "Ok"
    }
    console.log(ret)
})