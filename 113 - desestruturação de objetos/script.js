let a, b, c, d; 

[a, b, c, d] = [10, 20, "verde" , 40, "amarelo"] // Desestruturando array

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let a1, a2, a3;

({a1, a2, a3} = {a1: "verde", a2: "amarelo", a3: "azul"})

console.log(a1)
console.log(a2)
console.log(a3)

let numeros = [23, 32, 54, 2]

let [num1, num2, num3, num4] = numeros;

console.log(num1, num2, num3, num4)

let j, k, l;
[j, k, l] = [19]