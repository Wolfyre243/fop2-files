// Asynchronous functions return Promises by default.
async function pleaseResolve() {
    const coolmath = 2 * 2;
    // Don't forget the async keyword in your function declaration
    // Otherwise this line below wont work
    return coolmath; // This will become an implicit promise,

    // which would look something like this if we were to type it explicitly
    // return new Promise((res, rej) => {
    //     res(coolmath);
    // })
    // You may wish to define the returned promise explicitly too, which will be shown below
}

console.log(pleaseResolve()) // As you can see, the async function returns a promise object.

async function explicitContent() {
    const evencoolermath = 2**3;
    const forsomereasonitdoesntwork = false;

    return new Promise((res, rej) => {
        // Simulate a time delay
        setTimeout(() => {
            if (forsomereasonitdoesntwork) {
                rej(new Error("You suck")); // If the promise encounters an error, we reject it with an error message.
                // More on error handliing with promises later on
            } else {
                res(evencoolermath); // Otherwise we return our coolmath variable explicitly.
            }
        }, 1500);
    })
}

console.log(explicitContent()) // Here we can see that, obviously, the returned value is a promise.
// And also, we see this { <pending> } thingy
// Fun fact: When you print out promises, you will see Promise { } with sth inside the curly braces.
// Usually thats the state of the promise. If it is resolved, then the resolved value will be in the braces. Otherwise, it'll be pending like what you saw

// So how tf do we use that shit?
// Go to the next file
