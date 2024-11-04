let sales = [12.3 , 43.5, 22.5, 11.5, 86.0 , 44.6, 32.6 ];
let footfallCount = [ 12, 0, 10, 1, 5, 20, 40, 67, 22, 12];
let dateJoin = ['July 2, 2020', 'January 10 2014', 'May 5, 2018'];
let names = ["erica", "derek", "coolio", "audric", "franco", "brandy"];

// Sorting Functions (asc by default, reverse if desc);
const numberSort = (arr) => arr.toSorted((a, b) => a - b);
const stringSort = (arr) => arr.toSorted();
const dateSort = (arr) => arr.toSorted((a, b) => new Date(a) - new Date(b));

function smartSort(sortType, sortOrder, valuesToSort) {
    if (sortOrder === 'asc') return sortType(valuesToSort);
    return sortType(valuesToSort).reverse();
}

console.log('Ascending Sales:\n', smartSort(numberSort, 'asc', sales));
console.log('Ascending Dates:\n', smartSort(dateSort, 'asc', dateJoin));
console.log('Ascending Names:\n', smartSort(stringSort, 'asc', names));