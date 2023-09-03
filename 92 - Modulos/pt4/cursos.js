class Cursos {
    static cursos = ["javascript", "HTML", "CSS", "Python"]

    constructor(){}

    static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (indice) => {
        return this.cursos[indice]
    }

    static addCursos = (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static apagarCursos = () => {
        this.cursos = []
    }
}

export default Cursos