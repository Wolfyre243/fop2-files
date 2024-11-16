function highOrder(callback) {
    callback();
}

function hello() {
    console.log('I am a callback function');
}

highOrder(hello);