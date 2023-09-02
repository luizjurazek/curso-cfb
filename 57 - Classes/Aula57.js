class Carro {
    constructor(veiculo, tipo){
        this.veiculo = veiculo
        this.tipo = tipo
        if(tipo == 1){
            this.modelo = "Esportivo"
            this.velMax = 300
        } else if (tipo == 2) {
            this.modelo = "Passeio"
            this.velMax = 140
        } else {
            this.modelo = "Outro"
            this.velMax = 100
        }
    }

    getNome(){
        return this.nome
    }

    setNome(veiculo){
        this.veiculo = veiculo
        console.log(veiculo)
    }

    setAll(veiculo, tipo){
        this.veiculo = veiculo
        this.tipo = tipo
    }


    info(){
        console.log("\n-------------------------")
        console.log(`Veiculo: ${this.veiculo}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Velocidade máxima: ${this.velMax}`)
        console.log("\n")
    }
}

class Pessoa{
    constructor(){ //Recebe parametro nome e guarda no variavel nome
        this.nome = "Luiz";
    }
}

let pessoa1 = new Pessoa() //Instancia a classe com o método construtor recebendo parametro nome no construtor


let carro1 = new Carro("Golf", 2) //Instancia a classe com o método construtor atribuindo a string "golf" na variavel nome
let carro2 = new Carro("Porsche", 1)

let carro3 = new Carro("Fusca", 3)



console.log(carro1.veiculo + " " + carro1.modelo + " " + carro1.velMax)
console.log(carro2.veiculo + " " + carro2.modelo + " " + carro2.velMax)

carro3.info()

carro1.info()
carro1.setNome("Fusion")
carro1.info()

console.log(carro2)


carro3.setAll("Corsa", 2)

console.log(carro3)