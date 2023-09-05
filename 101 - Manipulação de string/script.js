let nome = new String(' Luiz ')
let nome2= new String(' Luiz ')

console.log(nome)


console.log(nome.charAt(1))
console.log(nome.charCodeAt(1))

console.log("Split: " + nome.split(' '))
console.log("concat: " + nome.concat(" Claudio"))
console.log("Slice: " + nome.slice(0, 2))
console.log("uppercase: " + nome.toUpperCase())
console.log("lowercase: " + nome.toLowerCase())
console.log("trim: " + nome.trim())
console.log("indexOF: " + nome.indexOf("k"))



console.log("localecompare: " + nome.localeCompare(nome2))

console.log("replace: " + nome.replace("iz", "zi"))

console.log("search: " + nome.search("Lu"))

let arr_nome = nome2.split('')
console.log(arr_nome)

let partOfstring = nome.substring(0, 3)
console.log(partOfstring)

console.log(nome.valueOf())

console.log(nome.startsWith(" "))
console.log(nome.endsWith("z"))

console.log(nome.includes("uiz "))

console.log(nome.repeat(4))


console.log(String.fromCodePoint(114))
console.log(String.fromCodePoint(112))
console.log(String.fromCodePoint(126))


let nome_ts = "Jorjao"