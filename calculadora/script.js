const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const teclaOn = document.querySelector("#t-on")
const teclaClear = document.querySelector("#t-clear")

const display = document.querySelector("#display")

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) =>{
        display.innerHTML += evt.target.innerHTML
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) =>{
        display.innerHTML += evt.target.innerHTML
    })
})

teclaClear.addEventListener("click", (evt)=> {
    display.innerHTML = "0"
})


console.log(teclasOp)
console.log(teclasNum)
console.log(teclaClear)