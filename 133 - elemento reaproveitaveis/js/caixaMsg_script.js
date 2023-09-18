class CaixaMensagem {
    titulo = null;
    texto = null;
    tipo = null;
    destino = null;
    divmsg = null;
    cor = null;

    constructor(config) {
        this.cor = config.cor;
        this.tipo = config.tipo;
        this.destino = document.body;
        this.titulo = config.titulo;
        this.texto = config.texto;
    }

    mostrar = () => {
        this.divmsg = document.createElement("div")
        this.divmsg.id = "divMsg";
        this.divmsg.classList.add("divMsg");

        const areaCaixaMsg = document.createElement("div")
        areaCaixaMsg.setAttribute("id", "areaCaixaMsg")
        areaCaixaMsg.setAttribute("class", "areaCaixaMsg")

        const tituloMsg = document.createElement("div")
        tituloMsg.setAttribute("id", "tituloMsg")
        tituloMsg.setAttribute("class", "tituloMsg")
        tituloMsg.style.backgroundColor = this.cor;
        tituloMsg.innerHTML = `<p class="titulo">${this.titulo}</p>`

        const bodyMsg = document.createElement("div")
        bodyMsg.setAttribute("id", "bodyMsg")
        bodyMsg.setAttribute("class", "bodyMsg")
        bodyMsg.innerHTML = `<p class="texto">${this.texto}</p>`

        const footerMsg = document.createElement("div")
        footerMsg.setAttribute("id", "footerMsg")
        footerMsg.setAttribute("class", "footerMsg")
        footerMsg.style.backgroundColor = this.cor;

        if (this.tipo == 1) {
            const btn_ok = document.createElement("button")
            btn_ok.setAttribute("id", "btn_ok")
            btn_ok.setAttribute("class", "btn_ok")

            btn_ok.innerHTML = "OK"

            footerMsg.appendChild(btn_ok)
            btn_ok.addEventListener("click", (evento) => {
                this.ocultar();
            })
        } else if (this.tipo == 2){
            const btn_n = document.createElement("button")
            const btn_s = document.createElement("button")
            btn_n.setAttribute("id", "btn_nao")
            btn_n.setAttribute("class", "btn_ok")
            btn_s.setAttribute("id", "btn_sim")
            btn_s.setAttribute("class", "btn_ok")

            btn_n.innerHTML = "Não"
            btn_s.innerHTML = "Sim"

            footerMsg.append(btn_s, btn_n)

            btn_s.addEventListener("click", (evento) => {
                this.ocultar();
                console.log(true)
            })
            btn_n.addEventListener("click", (evento) => {
                this.ocultar();
                console.log(false)
            })

        } else if (this.tipo == 3){
            const inputBtn = document.createElement("input")
            inputBtn.setAttribute("id", "inputBtn")
            inputBtn.setAttribute("class", "inputBtn")
            inputBtn.setAttribute("type", "text")

            const btn_env = document.createElement("button")
            btn_env.setAttribute("id", "btn_ok")
            btn_env.setAttribute("class", "btn_ok")

            btn_env.innerHTML = "Enviar"
            btn_env.addEventListener("click", (evento) => {
                this.ocultar();
                console.log(inputBtn.value)
            })

            footerMsg.append(inputBtn, btn_env)
        }

        areaCaixaMsg.appendChild(tituloMsg)
        areaCaixaMsg.appendChild(bodyMsg)
        areaCaixaMsg.appendChild(footerMsg)

        this.divmsg.appendChild(areaCaixaMsg)
        this.destino.prepend(this.divmsg)
    }

    ocultar = () => {
        this.divmsg.remove()
    }
}