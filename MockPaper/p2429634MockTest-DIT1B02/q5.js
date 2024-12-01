/* 
	Question 5
	Name: Zhang Junkai
	Admin No: p2429634
	Class: DIT1B02
	
*/

// All Vehicle Population data
const allVehicleData = require('./dataVehicleInfo');

allVehicleData.forEach(elem => {
	elem.year = parseInt(elem.year)
})

/*
    TODO: Fill up the code part a
*/
allVehicleData.slice(0, 5).forEach(vehicle => 
	console.log(`${vehicle.year} ${vehicle.category} ${vehicle.type}`)
);

/*
    TODO: Fill up the code part b
*/
const sortedVehicles = allVehicleData.sort((a, b) => a.year - b.year);
const firstVehicle = sortedVehicles[0];
const lastVehicle = sortedVehicles[sortedVehicles.length - 1];
console.log(`First set of sort by year\n${firstVehicle.year} ${firstVehicle.category} ${firstVehicle.type}`);
console.log(`Last set of sort by year\n${lastVehicle.year} ${lastVehicle.category} ${lastVehicle.type}`);


/*
    TODO: Fill up the code part c
*/
allVehicleData
	.filter(vehicle => vehicle.type === 'Private cars')
	.forEach(vehicle => console.log(`${vehicle.year} ${vehicle.category} ${vehicle.number}`));


