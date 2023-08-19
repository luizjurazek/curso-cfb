const pessoa = {
    nome: 'Luiz',
    canal: 'Jurazek cursos',
    cursos: 'Javascript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'Variaveis',
        aula03: 'condicional'
    }
}

console.log("em String: ")
const to_string_json = JSON.stringify(pessoa)
console.log(to_string_json)

console.log("em objeto: ")
const to_object_json = JSON.parse(to_string_json)
console.log(to_object_json)