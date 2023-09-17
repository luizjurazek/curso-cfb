const config = {
    cor: "#48f",
    tipo: 2
}
const caixaMensagem = new CaixaMensagem(config) 

const bnt_mostrarcxmsg = document.getElementById("bnt_mostrarcxmsg")
const bnt_mostrarcxmsg2 = document.getElementById("bnt_mostrarcxmsg2")
const bnt_mostrarcxmsg3 = document.getElementById("bnt_mostrarcxmsg3")



bnt_mostrarcxmsg.addEventListener("click", (evento) =>{
    caixaMensagem.mostrar("Caixa OK", "essa classe instancia uma caixa de mensagem")
})

bnt_mostrarcxmsg2.addEventListener("click", (evento) =>{
    caixaMensagem.mostrar("Teste2", "Testa na instancia da classe")
})
bnt_mostrarcxmsg3.addEventListener("click", (evento) =>{
    caixaMensagem.mostrar("Test3", "Js")
})