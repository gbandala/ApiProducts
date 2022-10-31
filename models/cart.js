const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartModel = new Schema({
    id: { type: String, required: true },
    carrito: [{
        id: { type: Number, required: true },
        nombre: { type: String, required: true },
        tipo: { type: String, required: false },
        cantidad: { type: String, required: true },
        desc: { type: String, required: false },
        precio: { type: Number, required: true },
        talla: { type: String, required: false },
        imagen: { type: String, required: false }
    }]
}, { collection: 'carrito' });

module.exports = mongoose.model('cart', cartModel);