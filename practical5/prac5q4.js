const phoneChoice = [ 
    { brand: "Samsung", model: "Galaxy S24 Ultra", color: "black", price: 861.00 }, 
    { brand: "Apple", model: "iPhone 16", color: "sliver", price: 1399 } 
] 

function chkSaving(amount) { 
    return new Promise((res, rej) => {
        const diff = Math.abs(900 - amount);
        setTimeout(() => {
            if (amount <= 900) res(`I will have a balance of $${diff} after the purchase.`)
            else rej(`I do not have enough money. I need $${diff} more to purchase the phone`);
        }, 1000)
    });
} 

function wishToPurchase(phone) { 
    chkSaving(phone.price)
        .then((res) => {
            console.log(`I have a new ${phone.brand} ${phone.model}.`);
            console.log(res);
        })
        .catch((err) => {
            console.log(`I am unable to purchase ${phone.brand} ${phone.model}.`);
            console.log(err)
        });
} 

console.clear(); 
const randomChoiceOfPhone = Math.floor(Math.random() * 2); // 0 or 1 
wishToPurchase(phoneChoice[randomChoiceOfPhone]); 