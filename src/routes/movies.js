"use strict"

const { Router } = require('express');
const router = Router();

let movies = require('../samples.json') // cambiado a variable para que los datos agregados sean permanentes

// Peticion inicial de GET
router.get('/movies', (req, res) => {
    res.json(movies);
});

// Petcion get por id
router.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    let pelicula;

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == id) {
            console.log(movies[i])
            pelicula = movies[i]
        } else {
            res.send('Lo siento, no encontramos tu pelicula')
        }
        
    }
    res.json(pelicula);
});

// Metodo POST --> Probado con postman
router.post("/nuevapeli/", (req, res) => {
    const { title, director, year, rating } = req.body;
    let last = movies[movies.length-1];
    console.log(last.id)
    const id = String(parseInt(last.id) + 1)

    let datoNuevo = 
    {
        'id': id,
        'title': title,
        'director': director,
        'year': String(year), // convertimos en string porque asi estan los otros datos
        'rating': String(rating)
    }

    movies.push(datoNuevo)
    res.json({"Agregado correctamente": datoNuevo})


  });

module.exports = router;