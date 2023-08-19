const p_array = document.querySelector("#array")
const caixa_array = document.querySelector("#caixa_array")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")
const txt_pesquisar = document.querySelector("#txt_pesquisar")

const elementos_array = [10, 5, 23, 2, 15, 20, 25]
const string_array = ["HTML", "CSS", "Javascript", "Vue"]

p_array.innerHTML = "[" + string_array + "]"

btnPesquisar.addEventListener("click", (evento) => {
    resultado.innerHTML = "Resultado não encontrado."
    const ret = string_array.find((el, index)=> {
        if(el.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor encontrado: " + el + " na posição: " + index
            return el
        } 
    })
})


