const Catalog = require('../models/catalog');
const Cart = require('../models/cart');
require('dotenv').config();
const API_KEY = process.env.API_KEY;


const getCatalog= (req,res)=>{
    if (req.query.apikey === API_KEY)
    {
        Catalog.find({}, { _id: 0 }, function (err, doc) {
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                console.log(doc);
                res.status(200).send(doc);
            }
        });
    }
    else
    res.status(403).json('acceso No autorizado');     
}
const getCart= (req,res)=>{
    if (req.query.apikey === API_KEY)
    {
        Cart.find({}, { _id: 0 }, function (err, doc) {
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                console.log(doc);
                res.status(200).send(doc);
            }
        });
    }
    else
    res.status(403).json('acceso No autorizado');  

 }
const getCartById= (req,res)=>{
    console.log('entrando...');
    if (req.query.apikey === API_KEY && req.params.userId != "")
    {
        console.log('apikey>',req.query.apikey);
        console.log('userId>',req.params.userId);
        Cart.find({id:req.params.userId}, { _id: 0, id: 0 }, function (err, doc) {
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                console.log(doc);
                res.status(200).send(doc);
            }
        });
    }
    else
    res.status(403).json('acceso No autorizado');    
 }
 const deleteCartById= (req,res)=>{
    console.log('entrando...');
    if (req.query.apikey === API_KEY && req.params.userId != "")
    {
        console.log('apikey>',req.query.apikey);
        console.log('userId>',req.params.userId);
        Cart.deleteOne({id:req.params.userId}, { _id: 0 }, function (err, doc) {
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                console.log(doc);
                res.status(200).send(doc);
            }
        });
    }
    else
    res.status(403).json('acceso No autorizado');    
 }
 const insertCartById= (req,res)=>{
    console.log('insertCartById...');
    if (req.query.apikey === API_KEY && req.params.userId != "" && req.body != "")
    {
        const doc = req.body;
        console.log('apikey>',req.query.apikey);
        console.log('userId>',req.params.userId);
        console.log('body>',doc);
        Cart.create(doc,(err, rep)=>{
            if (err) {
                        console.error(err.message);
                        res.status(400).send("Error");
                    }
                    else {
                        console.log(rep);
                        res.status(200).send(rep);
                    }
        })
    }
    else
    res.status(403).json('acceso No autorizado');    
 }
exports.getCatalog=getCatalog;
exports.getCart=getCart;
exports.getCartById=getCartById;
exports.deleteCartById=deleteCartById;
exports.insertCartById=insertCartById;

