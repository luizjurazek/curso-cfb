const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")
const btn_rodar = document.getElementById("btn_rodar")

const init = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.width = "100px"
    carro.style.height = "40px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

// window.onload = init

let anima = null
let animaAuto = null
let tamMax = null
let tamCarro = null
let dir = 0

const mover = (dir) => {
    if(dir > 0){
         if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover, 20, dir)
         } else {
            clearInterval(anima)
         }
    } else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
            anima = setTimeout(mover, 20, dir)
         } else {
            clearInterval(anima)
         }
    }
    console.log(tamMax)
}

const moverAutomatico = () => {
    if(parseInt(carro.style.left) >= tamMax){
        dir=-1
    } else if (parseInt(carro.style.left) <= 0){
        dir = 1
    }

    carro.style.left = parseInt(carro.style.left) + (10*dir) + "px"
    animaAuto = setTimeout(moverAutomatico, 20)
}

btn_parar.addEventListener("click", () => {
    clearInterval(anima)
    clearInterval(animaAuto)
})

btn_rodar.addEventListener("click", () => {
    clearInterval(anima)
    moverAutomatico()
})


btn_esquerda.addEventListener("click", () => {
    clearInterval(animaAuto)
    clearTimeout(anima)
    mover(-1)
})
btn_direita.addEventListener("click", () => {
    clearInterval(animaAuto)
    clearTimeout(anima)
    mover(1)
})

window.addEventListener("load", init)
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})