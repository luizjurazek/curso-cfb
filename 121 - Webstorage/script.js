const f_texto = document.getElementById("f_texto")
const p_texto = document.getElementById("p_texto")
const btn_texto = document.getElementById("btn_texto")

btn_texto.addEventListener("click",(evt)=>{
    console.log("Teste")
})

// let num = 10;
// const cursos = ['JS', 'HTML', 'CSS']
// localStorage.setItem('num', num)
// localStorage.setItem('years', 21)
// localStorage.setItem('nome', "Luiz")
// localStorage.setItem('cursos', cursos)
// console.log(localStorage.getItem('nome'))

// // localStorage.clear()
// localStorage.removeItem('num')

// console.log(localStorage.key(2))

// console.log(localStorage.length)

sessionStorage.setItem('jogo', "GOD OF WAR")
sessionStorage.setItem('ano', 2023)