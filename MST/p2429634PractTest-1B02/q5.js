/*
    Question 5
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

// Online Sales Data
const salesData = require('./onlinesalesdata');

// Part 5a 
function printProductInfo(data) {
    data.slice(0,10).forEach(entry => {
        console.log(`Product Category\t: ${entry.productCategory}\nProduct Name\t\t: ${entry.productName}\nUnit Price\t\t: S$${entry.unitPrice}\n`);
    });
}

// Test case 
// printProductInfo(salesData);

// Part 5b 
function displayHighestLowestPrice (data) {
    data.sort((a, b) => a.unitPrice - b.unitPrice);

    const highestItem = data[data.length - 1];
    const lowestItem = data[0];

    console.log(`Lowest Unit Price : $ ${lowestItem.unitPrice}`);
    console.log(`Highest Unit Price : $ ${highestItem.unitPrice}`);
}

// Test case 
// displayHighestLowestPrice(salesData);

// Part 5c 
function totalPaymentByPayMethod (data, paymentMethod) {
    const totalPayment = data
        .filter(transaction => transaction.paymentMethod === paymentMethod)
        .reduce((a, c) => a + parseFloat(c.totalRevenue), 0);

    console.log(`Total payment by ${paymentMethod} : $${totalPayment.toFixed(2)}`);
}

// Test case 1
// totalPaymentByPayMethod(salesData, "PayPal");

// Test case 2
// totalPaymentByPayMethod(salesData, "Debit Card");

// Part 5d
function sumByCategory(data){
    const productMap = {};
    const categoryArr = [];

    data.forEach(product => {
        if (!productMap[product.productCategory]) {
            productMap[product.productCategory] = parseInt(product.unitsSold);
        } else {
            productMap[product.productCategory] += parseInt(product.unitsSold);
        }
    })

    for (const category in productMap) {
        categoryArr.push({ productCat: category, sumQuantity: productMap[category] });
    }

    return categoryArr;
}

// Test case
// let result = sumByCategory(salesData);
// console.log(result);
