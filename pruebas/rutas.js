//definir las variables
var express = require('express');
var ruta = express.Router();
var middleware = require('/middlewares');

ruta.get('/ruta1',
    middleware.console.logFechaHora,
    middleware.saludo,(req, res)=>{
        res.send('Ruta 1')
    });

ruta.get('/ruta2',
    middleware.console.logFechaHora,
    middleware.saludo,(req, res)=>{
        res.send('Ruta 2')
    });

ruta.get('/ruta2',
    middleware.console.logFechaHora,
    middleware.saludo,(req, res)=>{
        res.send('Ruta 2')
    });  

ruta.get('/ruta3',(req, res)=>{
            res.send('Ruta 3')
        });


module.exports={ruta};

    