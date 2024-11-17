const car_sales = require('./car_sales')

function displayAll(carArr) {
    carArr.forEach(car => {
        console.log(`${car.maufacturer} Model ${car.model} S$${car.salesPrice} S$${car.resalePrice}`)
    })
};

function sortByResalePrice(carArr) {
    const sortedArr = carArr.toSorted((a, b) => a.resalePrice - b.resalePrice);

    const lowest = sortedArr[0];
    const highest = sortedArr[sortedArr.length - 1];

    displayAll(sortedArr);
    console.log(`Lowest Price\n${lowest.maufacturer} ${lowest.model} S$${lowest.resalePrice}\nHighest Price\n${highest.maufacturer} ${highest.model} S$${highest.resalePrice}`);
}

sortByResalePrice(car_sales);