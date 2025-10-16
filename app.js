// importo il framework express
const express = require("express");

// creo una istanza di express
const index = express();

// imposto il numero della porta
const port = 3000;

// uso il middleware static di express per rendere disponibile i file statici
index.use(express.static('public'));

// imposto la rotta di index
index.get("/", (req, res) => {
    res.send('<h1> Server del mio blog </h1>')
})

// Creo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
index.get("/bacheca", (req, res) => {

    const posts = require("./posts.js");
    console.log(posts[1].image);

    // invio la risposta con il json relativo
    res.json(posts);
})

// metto in ascolto il server sulla porta definita
index.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});