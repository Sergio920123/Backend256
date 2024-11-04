// este archivo es el encargado de configurar EL back-end


const express = require ('express'); // se llman los mofulos que estan en la carpeta node_modules
const conectarDB = require('../config/db');
const cors = require ('cors'); // se llma tambien el modulo cors

// CREAMOS LA VARIABLE APP: esto toma lo que triene express

const app = express();
const port = process.env.PORT || 4000; // puerto al que esytamos conectados 

//CONEXION DE BASES DE DATOS
conectarDB();

app.use(cors());
app.use(express.json());

// RUTA PARA CONSUMIR API CLIENTE
app.use('/apiLibros/clientes',require('../routes/rutasCliente'))
// RUTA PARA CONSUMIR API ENVIO.
app.use('/apiLibros/prestamos',require('../routes/rutasPrestamo'))
 


// CRAMOS LA RUTA PARA VERIFICAR NUESTRO SERVIDOR EN LA WEB
app.get('/', (req, res)=> {                 // muestra algo en la web
    res.send ("hola estamos conectados desde la web")

}); 



// RUTA DE NUESTRO SERVIDOR
app.listen(port,() =>{
    console.log("el servidor esta conectado http://localhost:4000/")
});
 
