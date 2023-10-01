const express = require('express')
const app = express()
const cors = require('cors')
const dbConnection = require('./connection.js'); // Import the connection pool from db.js

app.use(cors())
const port = 3000

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







app.listen(port, () => {
    console.log("servidor rodando na porta: " + port)
})