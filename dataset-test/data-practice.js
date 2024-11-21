const dataset = require('./dataset');

dataset
    .filter(person => person.name.startsWith('J'))
    .forEach(person => console.log(`${person.name} lives at ${person.address}`));

