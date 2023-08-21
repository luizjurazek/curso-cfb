const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const teclaOn = document.querySelector("#t-on")
const teclaClear = document.querySelector("#t-clear")
const display = document.querySelector("#display")
const teclaResultado = document.getElementById("tigual")

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) =>{
        sinal = false
        decimal = false
        if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0."
                } else if(evt.target.innerHTML == ","){
                    display.innerHTML += "."
                }
                
                else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) =>{
        if(!sinal){
            sinal = true
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            } else {    
                display.innerHTML += evt.target.innerHTML
            }
            
        }
    })
})

teclaClear.addEventListener("click", (evt)=> {
    decimal = false
    sinal = false
    display.innerHTML = "0"
})

teclaResultado.addEventListener("click", (evt)=> {
    decimal = false
    sinal = false
    const res =  eval(display.innerHTML)
    console.log(res)
    display.innerHTML = res
})


console.log(teclasOp)
console.log(teclasNum)
console.log(teclaClear)