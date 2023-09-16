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
    }

    mostrar = (titulo, texto) => {
        this.titulo = titulo
        this.texto = texto
        this.divmsg = document.createElement("div")
        this.divmsg.setAttribute("id", "divMsg")
        this.divmsg.setAttribute("class", "divMsg")
        
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
        
        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("id", "btn_ok")
        btn_ok.setAttribute("class", "btn_ok")
        btn_ok.innerHTML = "OK"

        footerMsg.appendChild(btn_ok)

        areaCaixaMsg.appendChild(tituloMsg)
        areaCaixaMsg.appendChild(bodyMsg)
        areaCaixaMsg.appendChild(footerMsg)

        this.divmsg.appendChild(areaCaixaMsg)
        this.destino.prepend(this.divmsg)

        btn_ok.addEventListener("click", (evento) =>{
            this.ocultar();
        })
    }

    ocultar = () => {
        this.divmsg.remove()
    }
}