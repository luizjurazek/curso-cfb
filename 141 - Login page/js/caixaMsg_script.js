class CaixaMensagem {
    // Propriedades da caixa de mensagem
    titulo = null;          // Título da caixa de mensagem
    texto = null;           // Texto da caixa de mensagem
    tipo = null;            // Tipo da caixa de mensagem (1 para OK, 2 para Sim/Não, 3 para campo de texto)
    destino = null;         // Elemento pai onde a caixa de mensagem será anexada
    divmsg = null;          // Elemento da caixa de mensagem
    cor = null;             // Cor de fundo da caixa de mensagem
    teste = null;           // Variável de teste (não está sendo usada no código)

    constructor(config) {
        // Inicializa as propriedades da caixa de mensagem com base na configuração
        this.cor = config.cor;
        this.tipo = config.tipo;
        this.destino = document.body;
        this.titulo = config.titulo;
        this.texto = config.texto;
    }

    mostrar = () => {
        // Criação dos elementos da caixa de mensagem
        // elemento que ocupa todo a tela
        this.divmsg = this.criarElemento("div", "divMsg", "divMsg", "", "")

        // elemento central 
        const areaCaixaMsg = this.criarElemento("div", "areaCaixaMsg", "areaCaixaMsg", "", "")

        // Titulo do conteúdo central
        const tituloContent = `<p class="titulo">${this.titulo}</p>`
        const tituloMsg = this.criarElemento("div", "tituloMsg", "tituloMsg", tituloContent)
        tituloMsg.style.backgroundColor = this.cor;

        // Corpo do conteúdo central
        const bodyContent = `<p class="texto">${this.texto}</p>`
        const bodyMsg = this.criarElemento("div", "bodyMsg", "bodyMsg", bodyContent, "")

        // rodape do conteúdo central
        const footerMsg = this.criarElemento("div", "footerMsg", "footerMsg", "")
        footerMsg.style.backgroundColor = this.cor;

        // Defini qual o tipo da caixa e os botoes de acordo com a funcionalidade
        // Tipo 1 == OK 
        // Tipo 2 == "sim" "não"
        // Tipo 3 == campo de texto
        this.tipoDaCaixa(this.tipo, footerMsg)
        

        areaCaixaMsg.append(tituloMsg, bodyMsg, footerMsg)

        this.divmsg.appendChild(areaCaixaMsg)
        this.destino.prepend(this.divmsg)
        return this.teste
    }

    ocultar = () => {
        this.divmsg.remove()
    }

    criarElemento(elName, elId, elClass, elContent, elType){
        const elemento = document.createElement(elName)
        elemento.id = elId
        elemento.type = elType
        elemento.classList.add(elClass)
        elemento.innerHTML = elContent

        return elemento
    }

    tipoDaCaixa(tipe, elToAppend){
        if (tipe == 1) {
            const btn_ok = this.criarElemento("button", "btn_ok", "btn_ok", "OK")
            btn_ok.setAttribute("id", "btn_ok")

            btn_ok.addEventListener("click", (evento) => {
                this.ocultar();
                console.log(true)
            })
            
            elToAppend.appendChild(btn_ok)
        } else if (tipe == 2){ 
            const btn_n = this.criarElemento("button", "btn_nao", "btn_ok", "Não")
            const btn_s = this.criarElemento("button", "btn_sim", "btn_ok", "Sim")

            // Retornar true para capturar e fechar a caixa 
            btn_s.addEventListener("click", (evento) => {
                window.close() 
            })

            btn_n.addEventListener("click", (evento) => {
                this.ocultar();
            })
            elToAppend.append(btn_s, btn_n)

        } else if (tipe == 3){
            const inputBtn = this.criarElemento("input", "inputBtn", "inputBtn", "","text")
            const btn_env = this.criarElemento("button", "btn_ok", "btn_ok", "Enviar")
            inputBtn.setAttribute("required", "required")
            
            btn_env.addEventListener("click", (evento) => {
                this.ocultar();
                console.log(inputBtn.value)
            })
            elToAppend.append(inputBtn, btn_env)
        }
            return elToAppend
    }
}

export { CaixaMensagem }