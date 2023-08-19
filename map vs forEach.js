
const tec = ["html", "CSS", "Javascript", "PHP", "React"]

console.log(tec)

// Percorre arrays, iterando elemento por elemento
tec.map((elemento, indice)=> {
    console.log(elemento, indice)
})

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map((number) =>{
    return number * 2;
})

console.log("Map " + doubledNumbers) // Cria um novo array


const numeros = [1, 2, 3, 4, 5]

const numerosDobrados = numeros.forEach((numero) => {
    return console.log("forEach " + numero * 2); // Retorna cada objeto
})

