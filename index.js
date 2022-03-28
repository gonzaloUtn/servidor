

// correr api  npm run dev

const express = require('express');

// 
const conectarDB = require('./config/db');
const { use } = require('./routes/producto');
const cors = require("cors"); // cors para conectar la base de datos

//crear servidor
const app = express();

//conectamos a la base de datosss
conectarDB();
app.use(cors())


app.use(express.json());//para enviar json a la app

app.use('/api/productos', require('./routes/producto'))

// ruta principal

app.get('/', (req, res) => {
    res.send('hola mundo');
})

app.listen(4000,() => {
    console.log('el servidor esta corriendo');
})