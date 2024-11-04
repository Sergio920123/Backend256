const mongoose = require ('mongoose');

const clienteSchema = mongoose.Schema({
    nombres:{
        type: String,
        required: true  // siempre tiene que llebnar el nombre
    },

    apellidos:{
        type: String,
        required: true   
    },

    telefono:{
        type: Number,
        required: true   
    },
    email:{
        type: String,
        required: true   
    },


    fecha_de_nacimiento:{
        type: String,
        required: true   
    },

    genero_literario_favorito:{
        type: String,
        required: true   
    },

    ciudad:{
        type: String,
        required: true   
    },


    direccion:{
        type: String,
        required: true   
    },




},{ versionKey: false});   // quita la version (dato que crea mogoose) ojo que va entre llaves

module.exports =mongoose.model('Cliente', clienteSchema);