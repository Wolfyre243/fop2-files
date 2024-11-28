// Import dependencies
const fs = require('node:fs');

// Import dataset
const dataset = [];

const importedData = fs.readFileSync('./data/world_population.csv', { encoding: 'utf-8', flag: 'r' });

const dataArr = importedData.split(/\r?\n/);
const colHeaders = dataArr[0].split(',');
dataArr.slice(1); // Remove headers

dataArr.forEach((row) => {
    const rowArr = row.split(',');
    const countryRecord = {};
    
    colHeaders.forEach((colName, index) => {
        countryRecord[colName] = rowArr[index];
    })

    dataset.push(countryRecord);
});

module.exports = dataset;

