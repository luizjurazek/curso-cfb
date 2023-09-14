const timer = document.getElementById("timer")
const btn_start = document.getElementById("btn_start")
const btn_iniciar = document.getElementById("btn_iniciar")
const btn_parar = document.getElementById("btn_parar")
const btn_zerar = document.getElementById("btn_zerar")
const btn_parcial = document.getElementById("btn_parcial")
const parciaisregistradas = document.getElementById("parciaisregistradas")


let tmpini;
let intervalo;


const contador = () => {
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = cont/1000
    timer.innerHTML = converterSeg(seg)
}

const converterSeg = (seg) => {
    let hora = Math.floor(seg/3600);
    hora = hora < 10 ? "0" + hora: hora;

    let resto = seg % 3600

    let minuto = Math.floor(resto/60)
    minuto = minuto < 1 ? "0" + minuto: minuto;

    let segundo = Math.floor(resto % 60)
    segundo = segundo < 10 ? "0" + segundo: segundo;

    let horaFormat = `${hora}:${minuto}:${segundo}`

    console.log(horaFormat)
    return horaFormat
}



btn_iniciar.addEventListener("click", () =>{
    tmpini = Date.now()
    intervalo = setInterval(contador, 1000)
})
btn_parar.addEventListener("click", () =>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click", () =>{
    tmpini = Date.now()
    timer.innerHTML = "00:00:00"
    parciaisregistradas.innerHTML = ""
    clearInterval(intervalo)
})

btn_parcial.addEventListener("click", () =>{
    let parcial = timer.innerHTML
    parciaisregistradas.innerHTML += "<p>" + parcial + "</p>"
})