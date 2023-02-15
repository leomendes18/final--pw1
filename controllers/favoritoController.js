const {favorito: favoritoModel, favorito} = require('../models/favorito');


async function criar (req, res){
    const {title, link, categoria} = req.body;
    try{
        new favoritoModel({
            title,
            link,
            categoria
        }).save().then(res.json('criou o favorito'))
    } catch(error){
        console.log(error)
    }
}

async function listarTodos (req, res){
    const todos = await favoritoModel.find();
    res.json(todos)
}

async function listarId (req, res){
    const id = req.params.id;
    const porId = await favoritoModel.findOne({_id: id})
    res.json(porId)
}

async function apagar (req, res){
    const id = req.params.id;
    const apagado = await favoritoModel.deleteOne({_id: id})
    res.json(`favorito com o id: ${id} foi apagado`)
}

async function editar (req, res){
    const id = req.params.id;
    const {title, link, categoria} = req.body;
    const editado = await favoritoModel.updateOne({_id: id, title: title, link: link, categoria: categoria})
    res.json(`favorito com o id: ${id} foi editado`)
}

module.exports = {criar, listarTodos, listarId, apagar, editar}