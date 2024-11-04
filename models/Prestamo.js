const mongoose = require ('mongoose');

const prestamoSchema = mongoose.Schema({
    nombres:{
        type: String,
        required: true  // siempre tiene que llebnar el nombre
    },

    apellidos:{
        type: String,
        required: true   
    },
    documento:{
        type: Number,
        required: true   
    },
    email:{
        type: String,
        required: true   
    },

    telefono:{
        type: Number,
        required: true   
    },
    direccion:{
        type: String,
        required: true   
    },   

    tituloPrestamo:{
        type: String,
        required: true   
    }, 
    fechaDePrestamo:{
        type: String,
        required: true   
    },
    fechaDeEntrega:{
        type: String,
        required: true   
    },
    entregaLibro:{
        type: String,
        enum: ['si', 'no',],          
        required: true
    },  
     estadoPrestamo: {
        type: String,
        enum: ['activo', 'finalizado', 'atrasado'], 
        required: true,     
    },  
    ciudad:{
        type: String,
        required: true   
    },
 



},{ versionKey: false});   // quita la version (dato que crea mogoose) ojo que va entre llaves

module.exports =mongoose.model('Prestamo', prestamoSchema);