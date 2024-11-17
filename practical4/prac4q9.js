const input = require('readline-sync');

const publicHolidays = {
    "New Year's Day": ["1 January 2024"],
    "Chinese New Year": ["10 February 2024", "11 February 2024"],
    "Good Friday": ["29 March 2024"],
    "Hari Raya Puasa": ["10 April 2024"],
    "Labour Day": ["1 May 2024"],
    "Vesak Day": ["22 May 2024"],
    "Hari Raya Haji": ["17 June 2024"],
    "National Day": ["9 August 2024"],
    "Deepavali": ["31 October 2024"],
    "Christmas Day": ["25 December 2024"],

    checkHolidays: function(holidayName) {
        const holidayDateArr = [];
        let additionalHoliday;

        this[holidayName].forEach(dateStr => {
            const date = new Date(dateStr);
            holidayDateArr.push(date.toDateString());

            if (date.getDay() == 6) {
                additionalHoliday = date; // additionalHoliday = 10/2/24
                additionalHoliday.setDate(date.getDate() + 2); // 12/2/24
            } else if (date.getDay() == 0) {
                additionalHoliday = date;
                additionalHoliday.setDate(date.getDate() + 1);
            }
        });

        if (additionalHoliday) {
            holidayDateArr.push(additionalHoliday.toDateString());
        }

        console.log(holidayDateArr);
    }
}

const userInput = input.question('Input your holiday of choice:\n');
publicHolidays.checkHolidays(userInput);