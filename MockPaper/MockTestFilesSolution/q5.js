/* 
	Question 5
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/

// All Vehicle Population data
const allVehicleData = require('./dataVehicleInfo');

/*
    TODO: Fill up the code part a
*/

 for (var i = 0 ; i< 5 ; i++){

    console.log(allVehicleData[i].year + " " + allVehicleData[i].category + " " + allVehicleData[i].type);
    
} 

/*
    TODO: Fill up the code part b
*/
//Convert string to number

allVehicleData.forEach(function (elem) {
    elem.year = parseInt(elem.year);
});


allVehicleData.sort(function (a, b) {
    if ((a.year) < (b.year)) {
        return -1;

    } else if ((a.year) > (b.year)) {
        return 1;
    }

});

console.log("First set of sort by year");
console.log(allVehicleData[0].year + " " + allVehicleData[0].category + " " + allVehicleData[0].type);
   
console.log("Last set of sort by year");
console.log(allVehicleData[allVehicleData.length-1].year + " " + allVehicleData[allVehicleData.length-1].category + " " + allVehicleData[allVehicleData.length-1].type);

/*
    TODO: Fill up the code part c
*/

let privateCarType = allVehicleData.filter((data) => data.type == "Private cars");

for (var i = 0 ; i< privateCarType.length ; i++){

    console.log(privateCarType[i].year + " " + privateCarType[i].category + " " + privateCarType[i].number);
    
} 

