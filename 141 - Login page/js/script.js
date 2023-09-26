import { Login } from "./login.js";
import { CaixaMensagem } from "./caixaMsg_script.js"

let config = {
    btnColor: '#247',
    imgPath: 'img/logo.png'
}

let configCaixaMensagem = {
    cor: "#CD4244",
    tipo: 1,
    titulo: "Login não efetuado",
    texto: "Usuário ou senha não encontrado!"
}

const caixaDeMensagem = new CaixaMensagem(configCaixaMensagem)

const callback_ok = () => {
    
}

const callback_nao_ok = () => {
    caixaDeMensagem.mostrar()
}

Login.login(callback_ok, callback_nao_ok, config)