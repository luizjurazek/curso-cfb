import classe_curso from './cursos.js'

classe_curso.addCursos("C")
classe_curso.addCursos("Photoshop")

console.log(classe_curso.getTodosCursos())

classe_curso.apagarCursos()
console.log(classe_curso.getTodosCursos())