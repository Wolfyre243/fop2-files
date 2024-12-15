async function givemeasec() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Hello World')
        }, 1000)
    })
}

async function imwaiting() {
    const text = await givemeasec();
    console.log(text);
    console.log('This will be delayed because of the thing on top')
}

imwaiting();
console.log('but this appears first'); // because 'await' only delays code within it's scope *I AM NOT 100% SURE ABOUT THIS NEITHER CAN I CONFIRM IT*

// unless we do this instead
await imwaiting();
console.log('boo'); // then this this will be delayed since we used await outside here

