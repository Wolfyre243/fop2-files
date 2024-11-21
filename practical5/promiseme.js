// The async await way

function randomDuration() {
    return (Math.floor(Math.random() * 5) + 1) * 1000;
}

function createOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order created: ", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function receivedOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order received", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function prepareOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("preparing food", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function orderReady(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order ready", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

function deliveredOrder(orderNumber, order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("order delivered", orderNumber, ":", order);
            resolve();
        }, randomDuration());
    });
}

async function placeOrder(orderNumber, order) {
    await createOrder(orderNumber, order);
    await receivedOrder(orderNumber, order);
    await prepareOrder(orderNumber, order);
    await orderReady(orderNumber, order);
    await deliveredOrder(orderNumber, order);
}

let currentOrderNumber = 0;

console.clear();
placeOrder(++currentOrderNumber, "Chicken Rice SET A");
placeOrder(++currentOrderNumber, "Duck Noodle");
placeOrder(++currentOrderNumber, "Western SET B");
placeOrder(++currentOrderNumber, "FishBall Soup");