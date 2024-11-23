const stockPrices = [32.11, 22.12, 45.12, 31.20, 32.50, 44.12];

stockPrices.forEach(element => element * 100);

const theMap = new Map();
theMap.set('hi', 1)
theMap.set('hello', 2)
theMap.set('h23e2i', 3)

theMap.forEach((value, key) => {
    console.log(value, key)
});