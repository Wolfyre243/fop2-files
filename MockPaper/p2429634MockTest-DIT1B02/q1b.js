/* 
	Question 1b
	Name: Zhang Junkai
	Admin No: p2429634
	Class: DIT1B02
	
*/

function typeOfPet() {
    var pet_type = "dog";
    console.log("My pet is a " + myPet());

    function myPet() {
        var other_pet = "cat";
        return other_pet;
    }

    myPet();
}

typeOfPet();
