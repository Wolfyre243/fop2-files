/* 
    Section A 
    Question 3a
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/
/* Test Case 1 - False */
// const fileReadStatus = false;

/* Test Case 2 - True */
const fileReadStatus = true;

// Create a Promise
/**

TODO: Write code for the Promise using arrow-function, using the file reading operation Boolean. 

**/
const fileReadPromise = new Promise((resolve, reject) => {
  if (fileReadStatus == true) {
    resolve("Sucessfully");
  } else if (fileReadStatus == false) {
    reject("Failed!");
  }
});

/**

TODO: Implement the promise chain.

*/
fileReadPromise
  .then((successMessage) => {
    console.log(`File Reading ${successMessage}`);
  })
  .catch((rejectMessage) => {
    console.log(`File Reading ${rejectMessage}`);
  })
  .finally((info) => console.log(`File Process Completed`));

