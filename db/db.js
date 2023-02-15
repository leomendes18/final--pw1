const mongoose = require('mongoose');
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CODE = process.env.DB_CODE;

const connectMongoDB = async function (){
    mongoose.set('strictQuery', true);
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB_CODE}.mongodb.net/?retryWrites=true&w=majority`)
    .then(() =>{
        useMongoClient =  true;
        console.log('conectou ao MongoDB!');
    }).catch((err) => console.log(err));
}

module.exports = {ConnectMongoDB: connectMongoDB};