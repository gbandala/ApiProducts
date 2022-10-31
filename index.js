// npm install express
// npm install body-parser'
// npm install mongoose
// npm install dotenv
// npm init
//1.-Requerir librerías, llaves y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const MongoDBUrl = process.env.MongoDBUrl;
const Controller = require('./controllers/admin');

//----------------------------------------------------------------------------------------
//2.-Configurar web server y parsee los datos
const app = express();
const port = process.env.PORT || 2500;
//instruccion para la asignacion del puerto dinamicamente

app.use(bodyParser.json());

//----------------------------------------------------------------------------------------
//3.- Definir paths disponibles
app.get('/', (req, res) => { res.send('Servidor activo.... ');});
app.get('/products',Controller.getCatalog);
app.get('/cart',Controller.getCart);
app.get('/cart/users/:userId', Controller.getCartById);
app.delete('/cart/users/:userId', Controller.deleteCartById);
app.post('/cart/users/:userId', Controller.insertCartById);

//----------------------------------------------------------------------------------------

//4.- Encender webserver y dbserver
app.listen(port, () => {
    console.log('Application Server conectado ');
    // console.log(MongoDBUrl);
    mongoose.connect(MongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('Mongodb Server Conectado...');
    }, err => { console.log(err) });
  });


  