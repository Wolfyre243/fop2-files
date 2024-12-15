// This is the main gist of what you need
// Because of some divine intervention (im js too good at programming), I am unable to use the line below
// const fetch = require('node-fetch');
import fetch from 'node-fetch'; // This line can be used too, but you may wish to use the line above if its more comfortable for you.

// Before anything else
// What the hell is fetch and why tf do we need it
// Idk tbh
/**
 * Fetch is the standard (built-in?) method by the node runtime to allow us to make HTTP requests to servers.
 * Remember BED? http://localhost:3000/pokemon? Yeah that's how we get the data
 */

// This is a public API for demo purposes. You may wish to substitute your BED endpoint here instead 
const allpokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

console.log(allpokemon); // As you can see, fetch() returns a promise, just like the async functions we've worked with.

// So, how do we use fetch to, fetch, data then??? (you don't you shld go kys)
// First, we need to extract the json from the response. 
// You wanna know why? Hint: Recall res.status(200).json({...});
// So, now let's put this all into a program

async function getAllPokemon() {
    const allpokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'); // oh yea, this URL gives us the first 151 pokemon
    // This extracts the json data from the response. we need await here because the .json() method is synchronous.
    // Hence, we should wait for the data to be extracted before we continue.
    const pokemonData = await allpokemon.json(); 
    console.log(pokemonData);
}

// getAllPokemon();

// Remember chaining? We can apply that here too
async function getAllPokemonButInACoolerWay() {
    // We will chain a bunch of stuff
    const allpokemon = 
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        // The 'res' here refers to the response we got from the fetch()
        // We use async here because to use the 'await' keyword, we need to do it in an asynchronous function.
        // Hence, making the callback function here asynchronous is necessary.
        .then(async res => await res.json()) // Here, we extract the data. This extraction returns a promise that, if we await, will resolve to the data we want.
    
    console.log(allpokemon);
}

getAllPokemonButInACoolerWay();