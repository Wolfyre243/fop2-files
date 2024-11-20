//import the daya from local external file 
const carSales = require("./carsales")

carSales.forEach(elements => console.log(elements.maufacturer + " Model : " + elements.model + "S$" + elements.resalePrice) )
const sortedCars=[...carSales]
sortedCars.forEach(element => element.resalePrice =parseFloat(element.resalePrice))

sortedCars.sort((a,b) => a - b);

console.log("Lowest Price")
console.log(sortedCars[0].maufacturer + " " + sortedCars[0].model + sortedCars[0].resalePrice)
console.log("highest Price")
let lastIndex = sortedCars.length -1 // because of the first index 0 
console.log(sortedCars[lastIndex].maufacturer + " " + sortedCars[lastIndex].model + sortedCars[lastIndex].resalePrice )

//c 
const bmwCarOnly = carSales.filter(element => element.maufacturer=="BMW")
bmwCarOnly.forEach (element => console.log(element.maufacturer + " " + element.model + " " + element.resalePrice))

//d
//position ( array,element,index this is a fixed )
//builtArray is an empty array(accumulator)
const maufacturerList = carSales.reduce((builtArray,element)=>{
    if(!builtArray.includes(element.maufacturer)){
        builtArray.push(element.maufacturer)
    }
    return builtArray;
},[]
);
console.log(maufacturerList)

//loop through the manudacturer list and build an array for each manufacturer 
maufacturerList.forEach((uniqueManufacturer) => {
    let aManufacturerArray = carSales.filter((element)=> element.maufacturer== uniqueManufacturer);
    console.log(uniqueManufacturer + " number of cars: " + aManufacturerArray.length);
})
