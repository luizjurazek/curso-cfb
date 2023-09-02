// Objetos literais - definir tipo dinamico em javascript
// Podemos trabalhar como as classes e adicionar propriedades e 
// metodos dentro desses elementos
// nao há necessidade de instanciar esses objetos 

const objetos = document.getElementById("objetos")

const computador = {
    cpu: "",
    ram: "",
    gpu: "",
    hd: "",
    info:function(){
        console.log(`CPU: ${this.cpu} - RAM: ${this.ram} - GPU: ${this.gpu}`)
        return true
    }
}

// Adicionando propriedade ao objeto literal
// computador['monitor'] = "22pol" 
// computador.ssd = "120gb" 
 
// console.log(computador)
// console.log("monitor: " + computador['monitor'])
// console.log("ssd: " + computador.ssd)

// computador.info()
// console.log(computadores)

// objetos.innerHTML = `${computador.cpu} - ${computador.ram} - ${computador.gpu}`
// objetos.innerHTML = JSON.stringify(computadores)

// Colonando um objeto
const c1 = Object.assign({}, computador)

c1.cpu = "Luiz"
// c1.info()


// Merge dos objetos o1, o2 e o3 no objeto o4
const o1 = {obj: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}

const o4 = Object.assign(o1, o2, o3)
console.log(o4)

// criando objetos a partir de um objeto literal
const c2 = Object.create(computador)
c2.cpu = "i7 3770k"
c2.ram = "16gb"
c2.gpu = "RX580 gb"
c2.hd = "2tb"
c2.info()
console.log(c2)

// Removendo propriedade do objeto
delete(c2.hd)
console.log(c2)



const computadores = [
    {
        cpu: "i5 1155k",
        ram: "16gb",
        gpu: "RX 580",
        hd: "2tb"
    },
    {
        cpu: "i7 3770k",
        ram: "32gb",
        gpu: "gtx 560",
        hd: "1tb"
    },
    {
        cpu: "i9 1198k",
        ram: "64gb",
        gpu: "gtx 3080",
        hd: "5tb"
    }
]

computadores.forEach((element)=>{
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.setAttribute("class", "computador")
    p.innerHTML = `CPU: ${element.cpu} 
    RAM: ${element.ram} 
    GPU: ${element.ram} 
    HD: ${element.hd}`
    div.appendChild(p)
    objetos.appendChild(div)
})