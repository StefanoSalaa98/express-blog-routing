// importo il framework express
const express = require("express");

// attivo il router
const router = express.Router();

// Rotte di CRUD sulla risorsa posts

// importo la lista dei posts
const posts = require("../posts.js");

// Creo poi una rotta /index che restituisca un oggetto json con la lista dei post.
router.get("/index", function (req, res) {

    // invio la risposta con il json relativo
    res.json(posts);
})

// index
router.get('/', function (req, res) {
    res.send('Lista dei posts');
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli del singolo post ' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale di uno specifico post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale di uno specifico post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione di uno specifico post ' + req.params.id);
});


module.exports = router;