const configOk = {
    cor: "#48f",
    tipo: 1,
    titulo: "Avaliação",
    texto: "A sua nota da avaliação é: 10"
}
const configOpt = {
    cor: "#48f",
    tipo: 2,
    titulo: "Salvar",
    texto: "Deseja salvar os dados?"
}
const configQuest = {
    cor: "#48f",
    tipo: 3,
    titulo: "Cadastro",
    texto: "Insira seu nome abaixo: "
}
const caixaMensagem = new CaixaMensagem(configOk) 
const caixaMensagem2 = new CaixaMensagem(configOpt) 
const caixaMensagem3 = new CaixaMensagem(configQuest) 

const bnt_mostrarcxmsg = document.getElementById("bnt_mostrarcxmsg")
const bnt_mostrarcxmsg2 = document.getElementById("bnt_mostrarcxmsg2")
const bnt_mostrarcxmsg3 = document.getElementById("bnt_mostrarcxmsg3")



bnt_mostrarcxmsg.addEventListener("click", (evento) =>{
    caixaMensagem.mostrar()
})

bnt_mostrarcxmsg2.addEventListener("click", (evento) =>{
    caixaMensagem2.mostrar()
})
bnt_mostrarcxmsg3.addEventListener("click", (evento) =>{
    caixaMensagem3.mostrar()
})