// importo il framework express
const express = require("express");

// creo una istanza di express
const app = express();

// imposto il numero della porta
const port = 3000;

// importo il modulo del router per i posts
const postRouter = require("./routers/posts.js")

// uso il middleware static di express per rendere disponibile i file statici
app.use(express.static('public'));

// rotte per i posts
app.use("/posts", postRouter);

// imposto la rotta di home
app.get("/", (req, res) => {
    res.send('<h1> Server del mio blog </h1>')
})

// Creo poi una rotta /index che restituisca un oggetto json con la lista dei post.
app.get("/index", (req, res) => {

    const posts = require("./posts.js");

    // invio la risposta con il json relativo
    res.json(posts);
})

// metto in ascolto il server sulla porta definita
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});