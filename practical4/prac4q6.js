const phoneContact = {
    ChongCS: "68704888", 
    TanKB: "68705888", 
    LimHT: "68704228", 
    LeeJane: "68702008", 
} 

const myPhoneBook = new Map();

for (const key in phoneContact) {
    myPhoneBook.set(key, phoneContact[key]);
}

console.log(myPhoneBook.get("ChongCS"));
myPhoneBook.forEach((number, lecturer) => console.log(lecturer, ':', number));
console.log(myPhoneBook.has('LimHT'));
console.log(myPhoneBook.has('TanHT'));

myPhoneBook.delete('LimHT');
myPhoneBook.forEach((number, lecturer) => console.log(lecturer, ':', number));

// myPhoneBook.clear()

myPhoneBook.forEach((value, key) => {
    if (value == '68704888') console.log(key);
})

