const Prestamo = require('../models/Prestamo');

// funcion agregar cliente 

exports.agregarPrestamos = async (req, res) =>{
    try {
       
        let prestamos = new Prestamo(req.body);  // new prestano llama a la constante Cliente la que llamamos en la linea 5
        await prestamos.save();
        res.json(prestamos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send ('Ocurrio un error al intentar Agregar un Prestamo')        
    }
}

// FUNCION BUSCAR PRESTAMOs
exports.buscarPrestamos = async (req, res) =>{
    try {
        const prestamos = await Prestamo.find();        
        res.json(prestamos);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Ocurrio un error al buscar los Prestamos');       
        
    }
}

// funcion buscar un prestamo  (unico) por id

exports.mostarPrestamo = async (req, res) =>{
    try {
        let prestamos = await Prestamo. findById(req.params.id);
        if(! prestamos){
            res.status(404).send({msg:"No se encuentra un prestamo con ese ID"})
        } 
        else{
            res.json(prestamos);
        }

        
    } catch (error) {
        res.status(500).send('Hubo un error al  tratar de mostar un Prestamo');
        
    }
}

// Funcion Modificar prestamo usando metodo patch
// en la siguiente funcion se  busca un cliente con id y se modifica

exports.modificarPrestamos = async (req, res) =>{
    try {
        const prestamos = await Prestamo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(! prestamos){
            res.status(404).send({msg:"No se encuentra un prestamo con ese ID"})
        } 
        else{
            res.json(prestamos);
        }
        
    } catch (error) {    // en este error salta cuando se envia la modificacion incorrecvta
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar modificar los Prestamos');
        
    }
}
 

// Funcion actualizar prewstamo usando metodo put
// en la siguiente funcion se  busca un cliente con id y se modifica

exports.actualizarPrestamos = async (req, res) => {   
    try {
        const prestamos = await Prestamo.findOneAndUpdate({_id: req.params.id }, req.body, {new: true}); // _id es como se llama el id en postman
        if (! prestamos){
            res.status(404).send({msg:"No se encuentra un Prestamovcon ese ID"})
        } 
        else{
            res.json(prestamos);
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar actualizar los prestamos');
        
    }
}

// ELIMINAR CLIENTE

exports.eliminarPrestamos = async (req, res) =>{
    try {
        const prestamos = await Prestamo.findById(req.params.id);
        if (! prestamos){
            res.status(404).send({msg:"No se encuentra un Prestamo con ese ID"})
        } 
        else{
            await Prestamo.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Prestamo eliminado"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error al intentar eliminar un Prestamo');        
    }
 
}


