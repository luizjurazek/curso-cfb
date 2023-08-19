class Npc {
    static alerta = false

    constructor(energia){
        this.energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.energia} `) 
        console.log(`Energia: ${Npc.alerta ? "Sim": "Não"} `) 
        console.log("--------------")
    }

    static setAlertar = function(){
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(90)
const npc3 = new Npc(20)

Npc.setAlertar()

npc1.info()
npc2.info()
npc3.info()

