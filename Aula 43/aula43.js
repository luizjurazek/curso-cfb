const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

let indice = 0


const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el) => {
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    
    // const comandos = document.createElement("div")
    // comandos.setAttribute("class", "comandos")
    // const rb = document.createElement("input")
    // rb.setAttribute("type", "radio")
    // rb.setAttribute("name", "rb_curso")
    // comandos.appendChild(rb)
    // novoElemento.appendChild(comandos)

    novoElemento.addEventListener("click", (evento) => {
        tirarSelecao()
        evento.target.classList.toggle("selecionado")
    })


    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})


const cursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    console.log(cursosSelecionados[0])
    return cursosSelecionados[0]
   
}


btnCursoSelecionado.addEventListener("click", (evento) => {
    try {
        // const rs = cursoSelecionado()
        // const cursoSelecionado = rs.parentNode.previousSibling.textContent   
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    } catch (err){
        console.log(err)
        alert("Selecione um curso!!")
    }


    // if(rs != undefined){
    //     const cursoSelecionado = rs.parentNode.previousSibling.textContent   
    //     alert("Curso selecionado: " + cursoSelecionado)
    // } else {
    //     alert("Selecione um curso!!")
    // }
})


btnRemoverCurso.addEventListener("click", (evento) => {
    const cs = cursoSelecionado()
    if(cs != undefined){
        cs.remove()
    } else {
        alert("Selecione um curso para remover!!")
    }
    
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evento) => {
    const cs = cursoSelecionado()
    try {
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cs)
            nomeCurso.value = ""
        }else {
            alert("Preencha o nome do curso!!")
        }
    } catch (err){
        console.log(err)
        alert("Selecione um curso!!")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evento) => {
    const cs = cursoSelecionado()
    try {
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cs.nextSibling)
            nomeCurso.value = ""
        } else {
            alert("Preencha o nome do curso!!")
        }
    } catch (err){
        console.log(err)
        alert("Selecione um curso!!")
    }
})