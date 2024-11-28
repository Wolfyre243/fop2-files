/* 
	Question 2
	Name: Tan Chan Lim
	Admin No: p1234567
	Class: DIT1B01
	
*/

function statvalue(operation, numbers) {

    stat_cal = operation(numbers);
    return stat_cal;
}

function sum(n1) {
    total = 0;
    for (i = 0 ; i < n1.length ; i++) {
        total += parseInt(n1[i]);
    }

    return total;
}

function average(n1) {
    total = 0;
    for (i = 0 ; i < n1.length ; i++) {
        total += parseInt(n1[i]);
    }
    ave = total / n1.length;
    return ave;
}


sumofAll = statvalue(sum, [1, 2, 4, 3, 7, 9]);
ave_value = statvalue(average, [1, 2, 4, 3, 7, 9]);


console.log("Sum " + sumofAll);
console.log("Average " + ave_value);
