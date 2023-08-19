// Exercicio objetos literais

const res = document.querySelector('.res');
const btn_add = document.querySelector('#btn_add');

const Pessoa = {
    nome: "",
    idade: "",

    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    },
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    }
}

const pessoas = []

const add_pessoa = () => {
    res.innerHTML = "";

    pessoas.forEach(p => {
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML += `Nome..: ${p.getNome()} <br> Idade..: ${p.getIdade()}`
    
        res.appendChild(div)
    })
    
}

btn_add.addEventListener("click", (el)=> {
    const pNome = document.querySelector("#f_nome")
    const pIdade = document.querySelector("#f_idade")

    const p1 = Object.create(Pessoa)
    p1.setNome(pNome.value)
    p1.setIdade(pIdade.value)

    console.log(p1)

    pessoas.push(p1)
    add_pessoa();

    pNome.value = ""
    pIdade.value = ""

    pNome.focus()
})