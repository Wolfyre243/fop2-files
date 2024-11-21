const input = require('readline-sync');

let count = 0;
function visitorCount(info, callback) {
    console.log('Starting to', info);
    while (count < 10) {
        input.question('Press enter to increment count');
        console.log(`Counter value ${++count}`)
    }
    callback();
}

function endOfText() {
    console.log(`Number count is ${count}\nCount Complete`)
}

visitorCount('Count Visitor', endOfText)