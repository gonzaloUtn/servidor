const Producto = require('../models/Producto')
// gon
exports.crearProducto = async (req, res) => {
    try {

        let producto;
        // creamos nuestro producto
        producto = new Producto(req.body)
        // almacena el producto del models producto

        // almacenar producto
        await producto.save();// await esperar
        res.send(producto);

        
    } catch (error) {
        console.log(error);

        res.status(500).send('hubo un error');
    }
}


exports.obtenerProductos = async (req, res) => {
    try {

        const producto = await Producto.find(); // tenemos la peticion
        res.json(producto);// 
        
    } catch (error) {
        console.log(error);

        res.status(500).send('hubo un error');
    }
}


exports.actualizarProducto = async (req, res) => {
    try {
        //extrar valores de los usuarios
        const {nombre,categoria, ubicacion, precio} = req.body;
        let producto =   await Producto.findById(req.params.id)// peticion a la base del producto

        // si el producto no existe enviar error 404
        if (!producto){
            res.status(404).json({msg:'no existe el producto'})
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        //actualizar producto
        producto = await Producto.findOneAndUpdate({_id:req.params.id}, producto, {new:true})
        res.json(producto);
        
    } catch (error) {
        console.log(error);

        res.status(500).send('hubo un error');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        
        let producto =   await Producto.findById(req.params.id)// peticion a la base del producto

        // si el producto no existe enviar error 404
        if (!producto){
            res.status(404).json({msg:'no existe el producto'})
        }

        
        res.json(producto);//muestra el json
        
    } catch (error) {
        console.log(error);

        res.status(500).send('hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        
        let producto =   await Producto.findById(req.params.id)// peticion a la base del producto

        // si el producto no existe enviar error 404
        if (!producto){
            res.status(404).json({msg:'no existe el producto'})
        }

        await Producto.findByIdAndRemove({_id:req.params.id});
        res.json({msg:"Producto eliminado con exito"});//muestra el mensaje
        //
    } catch (error) {
        console.log(error);

        res.status(500).send('hubo un error');
    }
}
