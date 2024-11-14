const car_sales = require('./car_sales')

function Car(manufacturer, model, salesPrice, resalePrice) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.salesPrice = salesPrice;
    this.resalePrice = resalePrice;
}

const carArr = []
for (let i = 0; i < car_sales.manufacturer.length; i++) {
    carArr.push(new Car(
        car_sales.manufacturer[i],
        car_sales.model[i],
        car_sales.salesPrice[i],
        car_sales.resalePrice[i]
    ))
};

carArr.forEach(car => {
    console.log(`${car.manufacturer} Model ${car.model} S$${car.salesPrice} S$${car.resalePrice}`)
})