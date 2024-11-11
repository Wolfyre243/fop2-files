// 5a
const person = { 
    name: "Amit", 
    age: 30, 
    gender: "male",
}; 

// console.log("Name : ", person.name);
// console.log("Age : ", person.age);
// console.log("Gender : ", person.gender);

// 5b
let bookinfo = { 
    bookTitle: "JavaScript from Beginner to Professional", 
    author: { 
        firstName: "Laurence", 
        lastName: "Lars Svekis" 
    }, 
    /* Write a function to return the book title */ 
    getTitle: function() {
        return this.bookTitle;
    },

    /* Write a function to return the first name and last name of author */ 
    getAuthorName: function() { 
        return this.author.firstName + " " + this.author.lastName 
    },
}; 

// console.log(bookinfo.getTitle())

//5c
const student = {  
    name: 'John', 
    "my age": 20, 
    "my hobbies": ['reading', 'games', 'coding'], 
    "say Hi": function() { 
        // complete the function to return the message as shown in the sample output 
        return `I am ${this.name} and my age is ${this["my age"]}`

    }, 

    "subject score": {
        maths: 90, 
        science: 80 
    } 

}; 

// console.log(typeof student);
// console.log(student.name);
// console.log(student['say Hi']());
// console.log(student["subject score"].maths);

// 5d
function Student(name, age, hobbies, score) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.score = score;

    this.sayHi = function() {
        return `I am ${this.name} and my age is ${this["my age"]}`
    }
}
