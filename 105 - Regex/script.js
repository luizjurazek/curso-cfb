let nome = new String("Luiz Claudio Jurazek 23 de alvarenga Luiz 2002")
let email = 'luizjurazek@gmail.com.br'

console.log(nome)

console.log(nome.search(/claudio/i)) // i - indica que nao deve ser usado case sensitive

console.log(nome.match(/e/ig)) // G indica que que quero todas as ocorrencias

console.log(nome.replace(/luiz/ig, 'Jose'))

console.log(nome.match(/[uj]/ig))

console.log(nome.match(/[0-9]{4}/ig))

console.log(nome.match(/[a-z|0-9]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // Retorna todas as ocorrencias de numeros
console.log(nome.match(/\s/ig)) // Retorna todas as ocorrencias de espaços
console.log(nome.match(/\bL/ig)) // Retorna todas as ocorrencias do caracter especifica no caso "L"


// Quantificadores
let nome2 = "Luizzzz Jurazzeeeeeek"
console.log(nome2.match(/z+/ig)) // o "+" pega todas as ocorrencias em sequencia de "z"


let numeros = "1, 10, 100, 1000"
console.log(numeros.match(/10+/ig)) // retorna todas as ocorrencias que possuam 10 em sequencia
console.log(numeros.match(/10*/ig)) // retorna todas as ocorrencias que tenham 10 ou 1
console.log(numeros.match(/10?/ig)) 