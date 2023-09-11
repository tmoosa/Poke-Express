require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Pokemon = require('./models/Pokemon')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once("open", ()=>{
    console.log("Linking !")
})

app.set("view engine", "jsx")
const jsxViewEngine = require('jsx-view-engine')
app.engine("jsx", jsxViewEngine())

app.use(express.urlencoded({extended: false}))

// Home
app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
});

// Index
app.get("/pokemon", async (req, res) => {
    try {
        const foundAllPokemon = await Pokemon.find({});
        res.status(200).render('Index', { pokemon: foundAllPokemon });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// New
app.get("/pokemon/new", (req, res) => {
    res.render("New.jsx"); 
});

app.post('/pokemon', async (req, res) => {
    try {
        const createdPokemon = await Pokemon.create(req.body);
        res.status(201).send(createdPokemon);
    } catch (error) {
        console.error(error);
        res.status(400).send("Bad Request");
    }
});

// Show
app.get("/pokemon/:id", async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('Show', {pokemon: foundPokemon})
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
