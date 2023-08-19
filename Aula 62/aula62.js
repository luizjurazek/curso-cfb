// Herança

class Carro { // Classe pai / Base
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    }
}


class Militar extends Carro { //Classe filho 
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.cor = "Verde"
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--   
        }
        console.log(this.municao)
    }
}

const c1 = new Carro("Golf", 4)

console.log(c1)

const c2 = new Militar("Fusca", 2, 100, 1000)
c2.atirar()
c2.atirar()
console.log(c2)
