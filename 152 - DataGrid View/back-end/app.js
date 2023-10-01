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
async function getProdutos(){
    try {
        const [rows] = await dbConnection.execute('SELECT * FROM produto')
        return rows
        // console.log("Produtos: " + rows)
    } catch (error){
        console.log("Error: " + error)
    }
}

// app.get('/', async (req, res) => {
//     const query = await queryDatabase()
//     res.send(query)
// })

app.get('/produtos', async (req, res) => {
    const query = await getProdutos()
    res.send(query)
})





app.listen(port, () => {
    console.log("servidor rodando na porta: " + port)
})