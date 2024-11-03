const input = require("readline-sync");
studInfo = [
    {
        id: 0, 
        studName: "John", 
        studAdminNo: '2312345', 
        gender: 'M', 
        studGPA: 2.8 
    }, 

    {
        id: 1,
        studName: "Jane",
        studAdminNo: '2354321',
        gender: 'F',
        studGPA: 3.2
    }, 

    {
        id: 2,
        studName: "Diana",
        studAdminNo: '2312525',
        gender: 'F',
        studGPA: 3.5
    }, 

    {
        id: 3,
        studName: "Joe",
        studAdminNo: '2366345',
        gender: 'M',
        studGPA: 3.1
    }, 

    {
        id: 4,
        studName: "Vivian",
        studAdminNo: '2366345',
        gender: '',
        studGPA: 3.75
    },
]; 

let studid = input.question("please enter your student id");

function greeting() {
    for (let i = 0; i < studInfo.length; i++) {
        if (studid == studInfo[i].id) {
            if(studInfo[i].gender=="M"){
                console.log("Hi Mr " + studInfo[i].studName)
            } else if (studInfo[i].gender == "F"){
                console.log("Hi ms" + studInfo[i].studName)
            } else {
                console.log("hi" + studInfo[i].studName)
            }
        }
    }
}
greeting();

function greetthestudent () {

    let dateNow = new Date();
    let hoursnow = dateNow.getHours();
    let greetingstring = '';

    const student = studInfo.find(student => student.id == studid);

    if (hoursnow < 12) {
        greetingstring = "Good Morning"
    } else if (hoursnow >= 12 &&  hoursnow < 18) {
        greetingstring = "Good Afternoon"
    } else if (hoursnow >= 18 && hoursnow < 24) {
        greetingstring = "Good Evening"
    }

    console.log(`${greetingstring} ${student.studName}`);
}

greetthestudent();