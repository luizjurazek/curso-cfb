const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")

const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")

const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")

const div_cor = document.querySelector("#div_cor")
const f_cor = document.querySelector("#f_cor")


const carros = document.querySelector("#carros")

const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []

const removerCarro = (carro) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != carro
    })
}

f_tipoMilitar.addEventListener("click", ()=> {
    
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
    div_cor.style.visibility = "hidden"
})

f_tipoNormal.addEventListener("click", ()=> {
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0

    div_cor.style.visibility = ""
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((carro) => {
        const div = document.createElement("div")
        const btn = document.createElement("button")
        btn.innerHTML = "Remover"

        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", carro.nome)

        if(carro.constructor.name == "Militar"){
            div.innerHTML = `Nome..: ${carro.nome}</br>`
            div.innerHTML += `Portas..: ${carro.portas}</br>`
            div.innerHTML += `Blindagem..: ${carro.blindagem}</br>`
            div.innerHTML += `Munição..: ${carro.municao}</br>`
            div.innerHTML += `Cor..: ${carro.cor}</br>`
        } else {
            div.innerHTML = `Nome..: ${carro.nome}</br>`
            div.innerHTML += `Portas..: ${carro.portas}</br>`
            div.innerHTML += `Cor..: ${carro.cor}</br>`
            
        }
        
        btn.addEventListener("click", (evt) => {
            const elementoToRemove = evt.target.parentNode.dataset.nome
            removerCarro(elementoToRemove)
            gerenciarExibicaoCarros()
        })

        div.appendChild(btn)
        carros.appendChild(div)

    })
}

btn_addCarro.addEventListener("click", (evento) => {
    if(f_tipoNormal.checked){
        const carro = new Carro(f_nome.value, f_portas.value, f_cor.value)
        a_carros.push(carro)
    } else {
        const carro = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(carro)
    }

    gerenciarExibicaoCarros()

    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0

    console.log(a_carros)
})

class Carro {
    constructor(nome, portas, cor){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = cor
    }
    
    ligar = () => {
        this.ligado = true
    }

    desligar = () => {
        this.ligado = false
    }

    setCor = (cor) => {
        this.cor = cor
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.cor = "Verde"
    }

    atirar = () => {
        if(this.municao > 0){
            this.municao--   
        }
        console.log(this.municao)
    }
}

