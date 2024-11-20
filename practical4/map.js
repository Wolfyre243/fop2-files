const obj = {
    hi: 1,
    hello: 2,
    hrufuieui: 3
};

const theMap = new Map();
theMap.set('hi', 1)
theMap.set('hello', 2)
theMap.set('h23e2i', 3)

theMap.forEach((value, key) => {
    console.log(value, key)
});