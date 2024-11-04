// SE CReA CONEXION A LA BASE DE DATOS
const mongoose = require ('mongoose');
require('dotenv').config();  // se llma a dotenv para conexion a base de doatos esto es una cadena de conexion


// CONEXION CON MONGO-DB{

const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)     //cuidado como llama tiene que ser igal a a la parte env
    .then(() => console.log("Estamos conectados desde mogoDB"))
    .catch((err) => console.log(err)); // mensaje de error si mongodb no esta conectado
}

module.exports = conectarBD; // exportar este modulo   

//npm run start este codogo se coloca abajo para arrancar