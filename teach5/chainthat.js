const randNum = () => Math.floor(Math.random() * 100) + 1

async function chainMe() {
    const randArr = [randNum(), randNum(), randNum()];

    return new Promise((res, rej) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5){
                res(randArr);
            } else {
                rej(new Error('You unlucky bastard'));
            }
        }, 1000);
    });
}

chainMe()
    .then(res => {
        // Because we know the resolved value is an array, we use the forEach method to do stuff to it
        res.forEach(num => console.log(num));
    })
    .catch(err => console.error(err)) // This is how we catch errors. It's quite similar to your try ... catch ...

// Over here we are chaining a lot of promises together, executing one after the other.
chainMe()
    .then((res) => {
        console.log('First array', res);
        return chainMe()
    })
    .catch(err => console.log(err))
    .then((res) => {
        console.log('Second array', res);
        return chainMe()
    })
    .catch(err => console.log(err))
    .then((res) => {
        console.log('Third array', res);
    })
    .catch(err => console.error(err))