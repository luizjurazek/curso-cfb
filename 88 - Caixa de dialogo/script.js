const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", (evt) => {
    alert("Alerta, javascript é muito brabo!")
})

btn_confirm.addEventListener("click", (evt) => {
    let retorno = confirm("js é a melhor linguagem?")
    console.log(retorno)
    if(retorno){
        console.log("Sim!!")
    } else {
        console.log("Não!!")
    }
})

btn_prompt.addEventListener("click", (evt) => {
    let retorno = prompt("Você gosta de javascript?")
    console.log(retorno)
})