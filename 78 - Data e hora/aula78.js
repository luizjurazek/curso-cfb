const div_data = document.getElementById("data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")


let som_alarme = new Audio("./salamisound-6557172-5-times-knocking-with-fist-on.mp3")
som_alarme.loop = -1
let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do alarme: "
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})


const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0" + dia: dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

let ano = data.getFullYear()
const data_r = `${dia}/${mes}/${ano}`

div_data.innerHTML = data_r

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    const hora_completa = `${hora}:${minutos}:${segundos}`
    div_relogio.innerHTML = hora_completa

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)






// console.log(Date.now()) // Timestamp
// console.log(data.getDate())
// console.log(data.getDay())
// console.log(data.getHours())
// console.log(data.getFullYear())
// console.log(data.getFullYear())
// const hora  = data.setHours(20, 50, 10)
// console.log(hora)
// const dia_m = data.getDate() < 10 ? "0" + data.getDate(): data.getDate();
// const data_s = dia_m +"/"+data.getMonth()+"/"+data.getFullYear();
// console.log(data_s)
