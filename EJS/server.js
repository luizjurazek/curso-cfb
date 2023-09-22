const express = require('express')
const app = express()
const port = 8080;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviçoes de forma fácil"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", (req, res) => {
    res.render("pages/about")
})

app.listen(port)
console.log("Servidor rodando")