const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")

const endPointTemp = "https://cfbcursos.luizjurazekk.repl.co/"

const obterDados = (endPoint) => {
    fetch(endPoint).then(result => result.json())
        .then((dados) => {
            console.log(dados)
            p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
            p_nivel.innerHTML = `Nivel: ${dados.nivel}`
            p_press.innerHTML = `Pressão: ${dados.pressao}`
        })
}

btn_texto.addEventListener("click", (evt) => {
    obterDados(endPointTemp)
})

// let intervalo = setInterval(obterDados(endPointTemp), 3000)