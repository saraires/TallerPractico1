"use strict"

const express = require('express');
const app = express();

const morgan = require("morgan");

// Configuraciones
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
require('dotenv').config();

// Rutas
app.get('/', (req, res) => {
    res.json({'Titulo':'Hola Mundo'});
});

app.use(require('./routes/index'));
app.use(require('./routes/movies'));


// Configuramos y levantamos puerto
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Servidor corrriendo en el puerto ${app.get('port')}`)
});

module.exports = app;