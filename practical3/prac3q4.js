function calculate(operation, initialValue, numbers) {
    return operation(initialValue, numbers);
};

const sum = (initial, numArr) => numArr.reduce((acc, curr) => acc + curr, initial);
const diff = (initial, numArr) => numArr.reduce((acc, curr) => acc - curr, initial);
const multiply = (initial, numArr) => {
    if (initial == 0) {
        console.log('Cannot multiply by an initial value 0 (or rather, you shouldn\'t); Changing to 1 instead.')
        initial = 1;
    };

    return numArr.reduce((acc, curr) => acc * curr, initial);
}

const division = (initial, numArr) => {
    if (initial == 0) {
        console.log('Cannot divide by an initial value of 0 (you really shouldn\'t); Changing to 1 instead.')
        initial = 1;
    };

    return numArr.reduce((acc, curr) => acc / curr, initial);
}

console.log('sum operation: ', calculate(sum, 0, [4, 6, 7]));
console.log('diff operation: ', calculate(diff, 0, [4, 6, 7]));
console.log('multiply operation: ', calculate(multiply, 1, [4, 6, 7]));
console.log('division operation: ', calculate(division, 1, [4, 6, 7]));