/* 
	Section A
	Question 1
	Name: Angie Wu En Qi
	Admin No: p2322993
	Class: DIT1B04
	
*/

const input = require("readline-sync");
let gifts = [
  {
    id: 0,
    name: "John",
    relation: "Brother",
    gift: "jersey",
    greeting: "Runnin Christmas",
  },
  {
    id: 1,
    name: "Candice",
    relation: "Sister",
    gift: "portable fan",
    greeting: "Breeze Christmas",
  },
  {
    id: 2,
    name: "Fat Daddy",
    relation: "Father",
    gift: "T-Shirt",
    greeting: "Fitting Christmas",
  },
  {
    id: 3,
    name: "Love Mommy",
    relation: "Mother",
    gift: "grinder",
    greeting: "Delicious Christmas",
  },
  {
    id: 4,
    name: "Christina",
    relation: "Aunt",
    gift: "Sling Bags",
    greeting: "Joyous Christmas",
  },
];

function myGifts() {
  // TODO: Code here
  // Add idea to the gift
  function add(item) {
    // Display the people receiving the gifts
    console.log("List of people receiving gifts:");
    for (let i = 0; i < gifts.length; i++) {
      console.log([i + 1] + ") " + gifts[i].name);
    }
    // Check who to add the item to
    const whoToAdd = input.question("Who do you want to add items to?");
    //Checks who shall the items be added to
    for (let i = 0; i < gifts.length; i++) {
      if (whoToAdd == gifts[i].name.toLowerCase()) {
        gifts[i].gifts.push(item);
      } else {
        console.log("Person is not on the list of people receiving gifts.");
      }
    }
  }

  function deleteItem() {
    // Display the people receiving the gifts
    console.log("List of people receiving gifts:");
    for (let i = 0; i < gifts.length; i++) {
      console.log([i + 1] + ") " + gifts[i].name);
    }
    // Checks who do they want to delete the item fromt
    const whoToDelete = input.question("Who do you want to delete from");

    // Checks who to delete the item to
    for (let i = 0; i < gifts.length; i++) {
      if (whoToDelete == gifts[i].name.toLowerCase()) {
        // Delete their items
        for (let j = gifts[i].gift.length; j > 0; j++) {
          gifts[i].gift.pop();
        }
      } else {
        console.log("Person is not on the list of people receiving gifts.");
      }
    }
    return "Sucessfully deleted!";
  }

  function getNumberOfGifts() {
    // Display the people receiving the gifts
    console.log("List of people receiving gifts:");
    for (let i = 0; i < gifts.length; i++) {
      console.log([i + 1] + ") " + gifts[i].name);
    }
    // Checks who they want to get the number of gifts from
    const whoToGet = input.question(
      "Who do you want to get the number of gifts from "
    );

    //Checks who to get
    for (let i = 0; i < gifts.length; i++) {
      if (whoToGet == gifts[i].name.toLowerCase()) {
        return "Gifts: " + gifts[i].gift;
      } else {
        console.log("Person is not on the list of people receiving gifts.");
      }
    }
  }

  return {
    add,
    deleteItem,
    getNumberOfGifts,
    // TODO: Code here
  };
}

myGifts();
// Display all the greeting message.
// TODO: Code here
