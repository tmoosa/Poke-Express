const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require('./models/pokemon');

const jsxViewEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxViewEngine());

// Index
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon });
});

// Show
app.get('/pokemon/:id', (req, res) => {
    const pokemonId = req.params.id;
    const selectedPokemon = pokemon[pokemonId]; 
    res.render('Show', { pokemon: selectedPokemon });
});

app.listen(PORT, () => {
    console.log(`We Live ${PORT}`);
});
