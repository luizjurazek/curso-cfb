import { Login } from "./login.js";
import { CaixaMensagem } from "./caixaMsg_script.js"

let config = {
    btnColor: '#247',
    imgPath: 'img/logo.png'
}


const callback_ok = () => {}

let configCaixaMensagemNaoOk = {
    cor: "#CD4244",
    tipo: 1,
    titulo: "Login não efetuado",
    texto: "Usuário ou senha não encontrado!"
}

const caixaDeMensagemNaoOk = new CaixaMensagem(configCaixaMensagemNaoOk)

const callback_nao_ok = () => {
    caixaDeMensagemNaoOk.mostrar()
}

let configCaixaMensagemFechar = {
    cor: "#247",
    tipo: 2,
    titulo: "Cancelar",
    texto: "Deseja sair?"
}

const caixaDeMensagemFechar = new CaixaMensagem(configCaixaMensagemFechar)

const callbackFechar = () => {
    caixaDeMensagemFechar.mostrar()
}

Login.login(callback_ok, callback_nao_ok, callbackFechar, config)