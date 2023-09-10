// let a, b, c, d; 

// [a, b, c, d] = [10, 20, "verde" , 40, "amarelo"] // Desestruturando array

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let a1, a2, a3;

// ({a1, a2, a3} = {a1: "verde", a2: "amarelo", a3: "azul"})

// console.log(a1)
// console.log(a2)
// console.log(a3)

// let numeros = [23, 32, 54, 2]

// let [num1, num2, num3, num4] = numeros;

// console.log(num1, num2, num3, num4)

// let j, k, l;
// [j, k, l] = [19]

let numeros = [10, 20, 30, 40, 50, 60, 70]
let [a, b, c, d, ...e] = [...numeros]
console.log(e)



let obj = {nome: "Luiz Jurazek", curso: "Javascript", idade: 20, cidade: "mandaguaçu"}
let { nome, curso, ...outrasPropriedades } = obj

console.log(nome)
console.log(curso)
console.log(outrasPropriedades)


const cores = () => {
    return ["verde", "amarelo", "azul", "branco"]
}
let [c1, c2, ,c3] = cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto = "Curso de javascript"
let [t1, t2, t3] = texto.split(" ")
console.log(t1)
console.log(t2)
console.log(t3)


