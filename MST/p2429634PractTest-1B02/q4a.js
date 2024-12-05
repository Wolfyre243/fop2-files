/*
    Question 4a
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

const words = ["apple", "pear", "apple", "orange", "orange", "apple", "pear", "apple"];

// initialize empty object for counting words
let wordCount = {};

// for tracking the number of unique word found
let uniqueWordCount = 0;

// Loop through the array and count occurrences
for (let word of words) {
    // word exist in wordCount  
    if (wordCount[word]) {
        // increase the count
        wordCount[word]++;
    } else {
        // first occurrence of word
        wordCount[word] = 1;
        // Increase the unique word count 
        // when a new word is found
        uniqueWordCount++;
    }
}

console.clear();
console.log("Number of unique words:", uniqueWordCount);
console.log("Word occurrences:")
console.table(wordCount);



