const mongoose = require('mongoose');
const {Schema} = mongoose;
const date = new Date();

const favoritoSchema = mongoose.Schema({
    title: String,
    link: String,
    categoria: String
});


const favorito = mongoose.model('favorito', favoritoSchema);

module.exports = {favorito};