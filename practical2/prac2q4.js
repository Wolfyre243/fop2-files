// Import dependencies
const readline = require('readline-sync');

const infoApp = () => {
    // Data
    const studInfo = [
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

    // Helper functions
    const calculateClassAverageGPA = () => {
        const sum = studInfo.reduce((acc, curr) => acc + curr.studGPA, 0);
        return (sum / studInfo.length).toFixed(2);
    };

    // Permanently attach app to student
    const id = readline.questionInt("Enter your student ID: ");
    const student = studInfo.find(student => student.id == id);

    return {
        greet() {
            const salutation = student.gender == '' ? '' : student.gender == 'M' ? 'Mr.' : 'Ms.';

            const currentHour = (new Date()).getHours();
            let timeGreeting = '';
            if (currentHour >= 0 && currentHour < 12) {
                timeGreeting = 'Good Morning'
            } else if (currentHour >= 12 && currentHour < 18) {
                timeGreeting = 'Good Afternoon'
            } else if (currentHour >= 18 && currentHour < 24) {
                timeGreeting = 'Good Evening'
            }

            console.log(`${timeGreeting}, ${salutation} ${student.studName}.`);
        },
        getGPA() {
            console.log(`Your GPA is ${student.studGPA}`);
            console.log(`The average GPA of the class is ${calculateClassAverageGPA()}`);
        }
    }
};

const studentInfoApp = infoApp(); // Permanently binds app to student's specified id when prompted for it.
studentInfoApp.greet();
studentInfoApp.getGPA();
