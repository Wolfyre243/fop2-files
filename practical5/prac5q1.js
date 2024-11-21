// let input = require('readline-sync');

// function doHomework(subject, callback) {

//     console.log('Starting my ' + subject + ' homework.');

//     // User must click to activate the callback function alertFinished() 

//     console.log('Waiting to Complete');

//     input.question("Are you done? (Press any key)");

//     callback();

// }

// function alertFinished() {

//     console.log('Finished my homework');

// }

// doHomework('math', alertFinished); 

function doHomework(subject, callback) {

    console.log('Starting my ' + subject + ' homework.');

    // Without user click to activate callback function alertFinished() 

    // Paused for 5 second before calling alertFinished() 

    setTimeout(callback, 5000);

}



function alertFinished() {

    console.log('Finished my homework');

}



doHomework('math', alertFinished); 