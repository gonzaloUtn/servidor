//importar libreria de mongoose
const mongoose = require('mongoose')

//aceder a la variable de entorno, con la ruta
require('dotenv').config ({path:"variable.env"});

// conectar a la base de datos con metodo asincrono
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
                           


        })
        console.log('base de datos conectada')
    }
    catch (err) {
        console.log(err);
         process.exit(1);// detener app
    }

}

// EXPORTAR LA FINCION PARA QUE SEA VISIBLE DE OTROS ACRCHIVOS
module.exports = conectarDB