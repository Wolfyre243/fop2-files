// Fill up the code for the question
const readline = require("readline-sync");
const fetch = require('node-fetch');

// Fetching Functions
// GET All Data from Population Dataset
async function getAllData() {
    const response = await fetch('http://localhost:8081/allpopulationdata');
    return await response.json();
}

// Frontend functions
async function readHighestPopulationData(topN) {
    const data = await getAllData();
    console.log(`Top ${topN} Countries with Highest Population`)
    data.sort((a, b) => b['Population'] - a['Population']).slice(0, topN).forEach(country => {
        console.log(country.Country);
    });
}

async function readLowestPopulationData(bottomN) {
    const data = await getAllData();
    console.log(`Bottom ${bottomN} Countries with Lowest Population`)
    data.sort((a, b) => a['Population'] - b['Population']).slice(0, bottomN).forEach(country => {
        console.log(country.Country);
    });
}

async function readHighestPopPerSqmData() {
    const data = await getAllData();
    console.log('Country with Highest Population Density:', data.sort((a, b) => b['PopDensityPerSqm'] - a['PopDensityPerSqm'])[0].Country);
}

async function readLowestPopPerSqmData() {
    const data = await getAllData();
    console.log('Country with Lowest Population Density:', data.sort((a, b) => a['PopDensityPerSqm'] - b['PopDensityPerSqm'])[0].Country);
}

// readHighestPopulationData(5);
readLowestPopulationData(5);
readHighestPopPerSqmData();
readLowestPopPerSqmData();