const dateArr = ['2024-11-20', '2024-10-21', '2024-11-30'];

console.log(dateArr.sort((a, b) => (new Date(a)) - (new Date(b))));

