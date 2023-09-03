const cursos = ["javascript", "HTML", "CSS", "Python"]

function getJsCurso(name){
    let cursojs = cursos.find((curso)=> curso === name)
    return cursojs
}


export default function cursosDisponiveis(){
    cursos.forEach((curso) => {
        console.log("Curso disponível: " + curso)
    })
}

export { cursos, getJsCurso }
// export default cursosDisponiveis