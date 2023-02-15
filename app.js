const express = require('express')
const app = express()
const db = require('./db/db')
const favoritoController = require('./controllers/favoritoController')

app.use(express.json())

db.ConnectMongoDB();

app.post('/criar', (req, res) => favoritoController.criar(req, res))
app.get('/listarTodos', (req, res) => favoritoController.listarTodos(req, res))
app.get('/listarId/:id', (req, res) => favoritoController.listarId(req, res))
app.delete('/apagar/:id', (req, res) => favoritoController.apagar(req, res))
app.put('/editar/:id', (req, res) => favoritoController.editar(req, res))

app.listen(3000, () => console.log('rodando'))