/*
    Question 4b
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

const productObjArr = [
    {name: "Laptop", price: 1500, quantity: 5, category: "Electronics"},
    {name: "Book", price: 20, quantity: 0, category: "Stationery"},
    {name: "Smartphone", price: 800, quantity: 3, category: "Electronics"},
    {name: "Pen", price: 2, quantity: 10, category: "Stationery"}
];

function getAvailableProducts(products) {
    const availableProducts = products
        .filter(product => product.quantity > 0) 
        .sort((a, b) => b.quantity - a.quantity) 
        .map(product => {
            return { name: product.name, quantity: product.quantity }
        }); 

    return availableProducts; 
}

console.clear();
console.log("All products:");
console.table(productObjArr);

console.log("Available products:");
console.table(getAvailableProducts(productObjArr));
