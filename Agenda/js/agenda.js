const cabecalho = document.getElementById("cabecalho")
const menu = document.getElementById("menu")
const principal = document.getElementById("principal")

const btn_home = document.querySelector("#btn_home")
const btn_novo = document.querySelector("#btn_novo")
const btn_pesquisar = document.querySelector("#btn_pesquisar")
const btn_gestao = document.querySelector("#btn_gestao")
const btn_sobre = document.querySelector("#btn_sobre")

btn_home.addEventListener("click", (evt) => {
    abrirPagina(evt.target)
    window.open("./pages/home.html", "if_principal")
})

btn_novo.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./pages/novo.html")
})

btn_pesquisar.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./pages/pesquisar.html")
})

btn_gestao.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./pages/gestao.html")
})

btn_sobre.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./pages/sobre.html")
})

const abrirPagina = (el, urlToOpen) => {
    const abas = [...document.querySelectorAll(".aba")]
    abas.forEach(el => {
        el.classList.remove("abaSelecionada")
    })
    el.classList.add("abaSelecionada")
    window.open(urlToOpen, "if_principal")
}