function stat_func(operation, numbers) {
    operation(numbers);
}

function sum(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('Sum', sum);
}

function average(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('Average', sum / arr.length);
}

function median(arr) {
    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);
    console.log('Median', arr[middle]);
}

// [2, 4, 6, 2, 2]
function mode(arr) {
    const counterMap = {
        2: 3,
        4: 1,
        6: 1
    };
    arr.forEach(num => {
        if (!counterMap[num]) {
            counterMap[num] = 1;
        } else {
            counterMap[num]++;
        }
    })

    let highest = 0;
    let highestKey = 0;
    for (const key in counterMap) {
        if (counterMap[key] > highest) {
            highest = counterMap[key];
            highestKey = key;
        }
    }

    console.log('Mode', highestKey);
}

stat_func(sum, [1, 2, 4, 3, 7, 9]);
stat_func(average, [1, 2, 4, 3, 7, 9]);
stat_func(median, [2, 4, 5, 7, 1, 8, 1]);
stat_func(mode, [2, 4, 6, 2, 2]);
