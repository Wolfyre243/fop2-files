const car_sales = require('./car_sales')

function displayAll(carArr) {
    carArr.forEach(car => {
        console.log(`${car.maufacturer} Model ${car.model} S$${car.salesPrice} S$${car.resalePrice}`);
    })
};

function sortByResalePrice(carArr, displayfn) {
    const sortedArr = carArr.toSorted((a, b) => parseInt(a.resalePrice) - parseInt(b.resalePrice));

    const lowest = sortedArr[0];
    const highest = sortedArr[sortedArr.length - 1];

    // displayfn(sortedArr);
    console.log(`Lowest Price\n${lowest.maufacturer} ${lowest.model} S$${lowest.resalePrice}\nHighest Price\n${highest.maufacturer} ${highest.model} S$${highest.resalePrice}`);
}

function displayAllByManufacturer(carArr, manufacturer) {
    const filteredArr = carArr.filter(car => car.maufacturer === manufacturer);

    displayAll(filteredArr);
}

const cache = {};

car_sales.forEach(car => {
    if (!cache.hasOwnProperty(car.maufacturer)) {
        cache[car.maufacturer] = 1;
    } else {
        cache[car.maufacturer]++;
    }
});

for (const manufacturer in cache) {
    console.log(`${manufacturer} number of car ${cache[manufacturer]}`);
}

// sortByResalePrice(car_sales);
//displayAllByManufacturer(car_sales, 'BMW')