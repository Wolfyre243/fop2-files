/* 
	Section B
	Question 1
	Name: Angie Wu En Qi
	Admin No: p2322993
	Class: DIT1B04
	
*/

const input = require("readline-sync");

// Import the dataVehicleInfo.js and dataVehicleType.js data
// TODO: Q3a Code here

// All Vehicle Population data
const alldata = require("./dataVehicleInfo");
// All Vehicle Type
const allVehicleType = require("./dataVehicleType");

// Display Option Menu
// TODO: Code here
do {
  var choice = input.question(
    "Please select one option (1 to 4): \n 1) All Vehicle Type \n 2) Query Vehicle Type \n 3) Total Number of Vehicle By Year \n 4) Exit \n"
  );
  switch (choice) {
    case "1":
      // 1. All Vehicle Type;
      for (let i = 0; i < allVehicleType.length; i++) {
        console.log("Vehicle type\n" + allVehicleType[i]);
      }
      break;
    case "2":
      // 2. Query Vehicle Type;
      do {
        console.log("Select Vehicle Type");
        for (let i = 0; i < allVehicleType.length; i++) {
          console.log(i + 1 + ") " + allVehicleType[i]);
        }
        var optionQueryVehicle = input.question("Enter 0 to exit. ");

        // Find the matching type with alldata
        // for ( let i = 0 ; i< allVehicleType.length)
        // if (allVehicleType[i])
      } while (optionQueryVehicle !== "0");
      break;

    case "3":
    case "4":
      console.log("Thank you & Goodbye!");
      break;
    default:
      console.log("Please enter a valid input ");
  }
} while (choice !== "4");

// function to display the query car information

// 3. Total Number of Vehicle By Year;
// 4. Exit;

// TODO: Code here for each option
