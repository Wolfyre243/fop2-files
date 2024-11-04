let sales = [12.3 , 43.5, 22.5, 11.5, 86.0 , 44.6, 32.6 ];
let footfallCount = [12, 0, 10, 1, 5, 20, 40, 67, 22, 12 ];
let dateJoin = ['July 2 2020', 'January 10 2014', 'May 5 2018'];

const sortNumArr = arr => arr.toSorted((a, b) => a - b);
const sortDateArr = arr => arr.toSorted((a, b) => new Date(a) - new Date(b));

console.log(sortNumArr(sales));
console.log(sortNumArr(footfallCount));
console.log(sortDateArr(dateJoin));


