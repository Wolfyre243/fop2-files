const carSaleArray = require("./car_sales")

function countCarsByManufacturer(array) {
    let manufacturersObj = {};
  
    array.forEach(car => {
        let manufacturer = car.maufacturer;
        if (!manufacturersObj[manufacturer]) {
            manufacturersObj[manufacturer] = 1;
        } else {
            manufacturersObj[manufacturer]++;
        }
    });
  
    // print out manufacturers
    for (let manufacturer in manufacturersObj) {
      console.log(manufacturer + " number of cars " + manufacturersObj [manufacturer]);
    }
  }
  
  countCarsByManufacturer(carSaleArray);