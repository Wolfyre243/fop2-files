/* 
    Section A
    Question 3b
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/

/**

TODO: Add code for Section A Question 3b.

*/

function processTrigger(package, processString) {
  return "Order", package + processString;
}

async function placeRequest(package) {
  await setTimeout(processTrigger(package, "delivery requested"), 3000);
  await setTimeout(processTrigger(package, "has been picked up"), 4000);
  await setTimeout(
    await processTrigger(package, "is on the way to destination"),
    2000
  );
  await setTimeout(processTrigger(package, "has been delivered"), 1000);

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

let shipmentNumber = 24537;
placeRequest(shipmentNumber);
