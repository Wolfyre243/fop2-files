/* 
	Question 3
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/

function myNote() {

    const storeNote = [];

    return {

        // part i 
        // TODO: Add code here */
        add(myPersonalNote) {
            storeNote.push(myPersonalNote);
        },

        // part ii 
        // TODO: Add code here */
        removeLastItem() {
            storeNote.pop();
        },

        // part iii 
        // TODO: Add code here */
        displayAll() {
            return storeNote;
        }


    }

}

// Test Case 
const note = myNote();
note.add("To learn JavaScript Programming");
note.add("To learn HTML in FED");
note.add("To learn Network fundamental");

console.log(note.displayAll());

note.removeLastItem();

console.log("Display of storeNote array after last item is removed.")
console.log(note.displayAll());