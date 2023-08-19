class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    Info(){
        console.log(`Nome..: ${this.getNome()}`)
        console.log(`Idade..: ${this.getIdade()}`)
        console.log("---------------------------")
    }

}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = () => {
    res.innerHTML = ""
    pessoas.map((pessoa) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome..: ${pessoa.getNome()} <br> Idade..: ${pessoa.getIdade()}`
        res.appendChild(div)
    })
}


btn_add.addEventListener("click", (evento) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")

    const pessoa = new Pessoa(nome.value, idade.value)

    pessoas.push(pessoa)

    nome.value = ""
    idade.value = ""

    nome.focus()

    console.log(pessoas)
    addPessoa()
})