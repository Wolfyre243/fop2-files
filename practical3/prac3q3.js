const firstLetter = str => str.replace(str.charAt(0), str.charAt(0).toUpperCase());

let message = 'i am out of office';
console.log(firstLetter(message));