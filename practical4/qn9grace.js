let publicHolidays2024 = {
    //list of 2024 holidats as variables/properties 
    "New year's day": ["1 Janurary 2024"],
    "Chinese New Year": ["10 Feburary 2024","11 Feburary 2024"],
    "Good Friday": ["29 Feburary 2024"],
    "Hari Raya Puasa": ["10 April 2024"],
    "Labour Day": ["1 May 2024"],
    "Vesak Day": ["22 May 2024"],
    "Hari Raya Haji": ["17 June 2024"],
    "National Day": ["9 August 2024"],
    "Deepavali": ["31 October 2024"],
    "Christmas Day": ["25 December"],

    checkHoliday: function (holidayName) {
        let dateArr = []
        let additionalHoliday;
      
        //search through the array eg "chinese new year" search through for 10 and 11
        this[holidayName].forEach(dateStr => {
            const date = new Date(dateStr)
            dateArr.push(date.toDateString()) //toDateString return in this format Sat Nov 17 2024
            //eturns the day of the week as a number, where 0 represents Sunday, 1 represents Monday, and so on up to 6, which represents Saturday.
            if(date.getDay() == 6 ) {
                additionalHoliday = date  // store in new holiday
                additionalHoliday.setDate(date.getDate() +2 ) //get date returns 17 from 17 november

            } else if (date.getDay() == 0){
                additionalHoliday = date 
                additionalHoliday.setDate(date.getDate()+1) //returns to extra holiday on Monday 

            }
           
        
        
    });
       
        // Check if the holiday name exists in the object
        if (!this[holidayName]) {
            console.log("Holiday not found.");
            return;
        } else {
            dateArr.push(additionalHoliday.toDateString())
            console.log(dateArr)
        }


    }


}
let input = require('readline-sync')
let askHoliday = input.question("What holiday is it? ")
publicHolidays2024.checkHoliday(askHoliday);