/*
    Question 2b
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

function convertPercentage(printFunction) {
    // Return an anonymous function (printPercentage)
    return function(inScoreList, inMaxScore) {
        // Invoke the callback
        printFunction(
            inScoreList.map(score => (score/inMaxScore*100)), // Convert to percentage
            100
        );
    }
}

// Original printResults function
function printResults(scoreList, maxScore) {
    console.log("Max score in test is", maxScore);
    scoreList.forEach(score => console.log(score.toFixed(1)));
}

// Test data
const scoreList = [800, 1200, 1400, 1550];
const maxScore = 1600 // Max score for UAT

// Print raw scores
console.log("Scores: Raw");
printResults(scoreList, maxScore);

// Print percentage scores
console.log("\nScores: Percentage");				 
// Use convertPercentage to create a version of printResults
// that displays percentage scores
const printPercentage = convertPercentage(printResults); 
printPercentage(scoreList, maxScore); 			
