const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")


const promessa = () => {
    let promise = new Promise((resolve, reject) => {
        let tempo = 3000
        let resultado = true

        setTimeout(() => {
            if (resultado) {
                resolve("Deu tudo certo")
            } else {
                reject("Deu tudo errado")
            }
        }, tempo)
    })

    return promise
}


btn_promessa.addEventListener("click", () => {
    numero.innerHTML = "Processando..."
    promessa().then((retorno) => {
        numero.innerHTML = "Deu tudo certo"
        numero.classList.remove("erro")
        numero.classList.add("ok")
    }).catch((retorno) => {
        numero.innerHTML = "Deu tudo errado"
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})

numero.innerHTML = "Esperando"