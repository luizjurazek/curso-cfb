const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_get = document.getElementById("btn_get")
const btn_post = document.getElementById("btn_post")

const endPointTemp = "https://cfbcursos.luizjurazekk.repl.co/"

const obterDados = (endpoint) => {
    fetch(endpoint, {
            method: "get"
        }).then(result => result.json())
        .then((dados) => {
            console.log(dados)
            p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
            p_nivel.innerHTML = `Nivel: ${dados.nivel}`
            p_press.innerHTML = `Pressão: ${dados.pressao}`
        })
}

btn_get.addEventListener("click", (evt) => {
    obterDados(endPointTemp)
})

// let intervalo = setInterval(obterDados(endPointTemp), 3000)

let dados = {
    nome: "Luiz",
    canal: "Jurazek Channel",
    curso: "Javascript"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados = (endpoint) => {
    fetch(endpoint, cabecalho).then(res => res.json())
        .then(ret => {
            console.log(ret)
        })
}


btn_post.addEventListener("click", (evt) => {
    gravarDados("Criar endpoint pra receber os dados")
})
// const gravarDados = (endpoint) => {
//     fetch(endpoint, {
//         method: "POST",
//         body: JSON.stringify(dados)
//     }).then(res => res.json()).then(ret => {
//         console.log(ret)
//     })
// }