// program to calculate Paige's profit per item (child, adult) bracelets

let welcome = "Welcome to Crafty Crafters!!!";
console.log (welcome);

// function to calculate number of bands per cm
let bandsPerCm = function (numBands, cm){

  return numBands / cm;
}
// do not change this it was measured with Paige (20 bands  = 7 cm)
console.log(`Number of bands per cm = ${bandsPerCm(20,7).toFixed(2)}`);

// cost per band function
let costBands = function (price, tax, bandsInBag){
  return (price + (price * tax)) / bandsInBag
}
console.log(`This is the cost per band $${costBands(4,0.05,600).toFixed(2)}`);

// cost per bands per cm 
let costPerBandsPerCm = bandsPerCm(20,7) * costBands(4,0.05,600);
    
console.log(`Cost per bands per cm $${costPerBandsPerCm.toFixed(2)}`);
// would have liked to round this to $0.03 (more conseravtive) tried a bunch of stuff Math.round() etc..

// function calculating the cost of each type of bracelet (child & adult)
let braceletLength; // not sure where to include this variable
let type; // Aware that "type" is used in two functions

let braceletType = function (type){
  if (type === "child"){
    braceletLength = 16.5;
  } else if (type === "adult") {
    braceletLength = 20;
  }
  return braceletLength * costPerBandsPerCm;
}
console.log(`Cost per child bracelet $${braceletType("child")}`);
console.log(`Cost per adult bracelet $${braceletType("adult")}`);

// section calculating the profit of each type of bracelet
let salePriceChild = 4;
let salePriceAdult = 5;

let profitType = function (type){
  if ( type === "child") {
  return salePriceChild - braceletType("child");
} else if (type === "adult"); { 
  return salePriceAdult - braceletType("adult");
}
}
console.log(`Profit per child bracelet $${profitType("child")}`);
console.log(`Profit per adult bracelet $${profitType("adult")}`);