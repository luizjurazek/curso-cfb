import { contatos } from "./bancoContatos.js"

let contato = {
    getTodosContatos: function(){
        return contatos
    },
    getContato:function(indice_contato){
        return contatos[indice_contato]
    },
    addContato:function(novoContato, destinoDOM){
        contatos.push(novoContato)

        destinoDOM.innerHTML = ""

        contatos.forEach((contato) => {
            const div = document.createElement("div")
            div.setAttribute("class", "contato")

            const p_nome = document.createElement("p")
            const p_telefone = document.createElement("p")
            const p_email = document.createElement("p")

            p_nome.innerHTML = contato.nome
            p_telefone.innerHTML = contato.telefone
            p_email.innerHTML = contato.email

            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)

            destinoDOM.appendChild(div)
        })



        
        
    }
}

export default contato