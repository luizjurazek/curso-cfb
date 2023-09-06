const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")

const posx = document.getElementById("posx")
const posy = document.getElementById("posy")

const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

const info = (el) => {
    const DOMRect = el.getBoundingClientRect()
    posx.innerHTML = `posx: ${DOMRect.x}`
    posy.innerHTML = `posy: ${DOMRect.y}`
    largura.innerHTML = `Largura: ${DOMRect.width}`
    altura.innerHTML = `Altura: ${DOMRect.height}`
}


q1.addEventListener("click", (evt) => {
    info(evt.target)
})
q2.addEventListener("click", (evt) => {
    info(evt.target)
})