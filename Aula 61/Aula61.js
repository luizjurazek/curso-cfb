// Objetos literais
const Pessoa = {
    nome: "Luiz",
    getNome: function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    }
}

console.log(Pessoa.nome)

const p2 = new Pessoa
const p3= Pessoa

console.log(p2)
console.log(p3)

p3.nome = "Jorge"
console.log(p2)
console.log(p3)

p2["nome"] = "Matheus"
console.log(p2)
console.log("Nome P3: " + p3.getNome())


Pessoa.setNome("Gabriel")
console.log(p2["nome"])
console.log(p2.nome)