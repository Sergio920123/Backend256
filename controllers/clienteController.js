const Cliente = require('../models/Cliente');


// funcion agregar cliente 

exports.agregarClientes = async (req, res) =>{
    try {
       
        let clientes = new Cliente(req.body);  // new cliente llama a la constante Cliente la que llamamos en la linea 5
        await clientes.save();
        res.json(clientes);

        
    } catch (error) {
        console.log(error);
        res.status(500).send ('Ocurrio un error al intentar Agregar un Cliente')        
    }
}

// FUNCION BUSCAR CLIENTES
exports.buscarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Ocurrio un error al buscar los clientes');       
        
    }
}

// funcion buscar un cliente  (unico) por id

exports.mostarCliente = async (req, res) =>{
    try {
        let clientes = await Cliente. findById(req.params.id);
        if(! clientes){
            res.status(404).send({msg:"No se encuentra un cliente con ese ID"})
        } 
        else{
            res.json(clientes);
        }

        
    } catch (error) {
        res.status(500).send('Hubo un error al  tratar de mostar un cliente');
        
    }
}

// Funcion Modificar Cliente usando metodo patch
// en la siguiente funcion se  busca un cliente con id y se modifica

exports.modificarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(! clientes){
            res.status(404).send({msg:"No se encuentra un cliente con ese ID"})
        } 
        else{
            res.json(clientes);
        }
        
    } catch (error) {    // en este error salta cuando se envia la modificacion incorrecvta
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar modificar los clientes');
        
    }
}
 

// Funcion actualizar  Cliente usando metodo put
// en la siguiente funcion se  busca un cliente con id y se modifica

exports.actualizarClientes = async (req, res) => {   
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id }, req.body, {new: true}); // _id es como se llama el id en postman
        if (! clientes){
            res.status(404).send({msg:"No se encuentra un cliente con ese ID"})
        } 
        else{
            res.json(clientes);
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar actualizar los clientes');
        
    }
}

// ELIMINAR CLIENTE

exports.eliminarClientes = async (req, res) =>{
    try {
        const clientes = await Cliente.findById(req.params.id);
        if (! clientes){
            res.status(404).send({msg:"No se encuentra un cliente con ese ID"})
        } 
        else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Cliente eliminado"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar eliminar los clientes');        
    }
 
}


