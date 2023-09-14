const texto = document.getElementById("texto")

const arquivo = './texto.txt'

fetch(arquivo).then(res => res.json())
    .then(res => console.log(res))