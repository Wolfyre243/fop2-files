// Define a new promise
const myPromise = new Promise((res, rej) => {
    // This is just a simple setTimeout to simulate the time taken to fetch data irl.
    setTimeout(() => {
        const rand = Math.random() // Randomise success or failure
        if (rand < 0.5){
            res('Success!!!'); // This is the value that the promise will resolve with, or 'return' with.
        } else {
            rej(new Error('Fail!!!'));
        }
    }, 3000);
});

console.log('Script running...');
// You will understand what the then method does later on
myPromise.then(res => console.log(res)); // This is like queuing the promise to come later on, i.e. if waiting is needed, it gets put on the side, until its resolved/rejected, then comes back in
console.log('This should appear before the promise resolves');