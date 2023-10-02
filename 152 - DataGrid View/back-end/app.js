const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const dbConnection = require('./connection.js'); // Import the connection pool from db.js
const port = 3000

app.use(cors())
app.use(bodyParser.json())



// Now you can use dbConnection to interact with the database
// async function queryDatabase() {
//     try {
//         let [rows] = await dbConnection.execute('SELECT * FROM produto');
//         return rows
//         console.log('Query:', rows);
//     } catch (error) {
//         console.error('Error querying the database:', error);
//     }
// }

// Get all products 
async function getAllProdutos(){
    try {
        const [rows] = await dbConnection.execute('SELECT * FROM produto')
        return rows
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// Get um produto em especifico 
async function getProduto(idProduto){
    try {
        const [produto] = await dbConnection.execute(`SELECT * FROM produto WHERE n_id_produto = ${ idProduto }`)
        return produto
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// Remover produto
async function removeProduto(idProduto){
    try {
        const [produto] = await dbConnection.execute(`DELETE FROM produto WHERE n_id_produto = ${ idProduto }`)
        // console.log(produto)
        return produto
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// Criar produtos
async function criarProduto(produto, marca, modelo){
    try {
        const novoProduto = await dbConnection.execute(`INSERT INTO produto(s_nome_produto, s_marca_produto, s_modelo_produto) VALUES ('${produto}', '${marca}', '${modelo}')`);
        return novoProduto
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// Editar produtos
async function editarProduto(id, produto, marca, modelo){
    try {
        const produtoEditado = await dbConnection.execute(`UPDATE produto SET n_id_produto=${id},s_nome_produto="${produto}",s_marca_produto="${marca}",s_modelo_produto="${modelo}" WHERE n_id_produto = ${id}`);
        return produtoEditado
    } catch (error){
        console.log(`Error: ${error}`)
    }
}

// Rota produtos -> retorna um array com todos os produtos do bd
app.get('/produtos', async (req, res) => {
    const query = await getAllProdutos()
    res.send(query)
})

// Rota produto -> retorna o produto em especifico
app.get('/getproduto/:id', async (req, res) =>{
    const id = req.params.id;
    const query = await getProduto(id)
    res.send(query)
})

// Remover produto
app.get('/removerproduto/:id', async (req, res) =>{
    const id = req.params.id
    const query = await removeProduto(id)
    res.send(query)
})

// Criar produto 
app.post('/criarproduto', async (req, res) =>{
    let produto = req.body.produto
    let marca = req.body.marca   
    let modelo = req.body.modelo
    const novoProduto = await criarProduto(produto, marca, modelo)
    res.send(novoProduto)
})

app.get('/editarproduto/:id/:produto/:marca/:modelo', async (req, res) =>{
    let id = req.params.id
    let produto = req.params.produto
    let marca = req.params.marca
    let modelo = req.params.modelo
    const query = await editarProduto(id, produto, marca, modelo)
    res.send(query)
})


app.listen(port, () => {
    console.log("servidor rodando na porta: " + port)
})