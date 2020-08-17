// Prep work for lighthouse labs - 4. Programming Intro 
// Conditionals Execution
let raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

 if (cold) {
   console.log("Make sure you pick out a scarf!");
  } else {
    console.log("Short sleeves are fine.");
  }

  let temp = 23;

  if (temp < 0) {
    console.log("Maker sure you pick out a scarf!");
  } else if (temp < 15) {
    console.log("Short sleeves won't cut it!");
  } else {
    console.log("Short sleeves are fine.");
  }

  console.log("Now you're ready to go outside");

const isCitizen = true;
let age = 26;

if (isCitizen && age > 18) {
  console.log("you are eligible to vote.");
}
temp = -56;
if (temp < -40 || temp > 40) {
  console.log("maybe going outside isn't such a great idea...");
}

raining = false;
if (!raining) {
  console.log("leave you umbrella at home.");
}
// Conditionals - whichSchool
// Will try to execute with if/else and switch statments

age = 8
const whichSchool = function (age) {
  if (age < 13){
  return("elementary");
} else if (age >= 13 && age < 18) {
  return("Secondary");
} else if (age > 18) {
  return("Lighthouse");
}
}
console.log(whichSchool(55));
console.log(whichSchool(17));
console.log(whichSchool(6));
// forgot the return statment 
// set whichSchool up as a function and not a var with a function


// trying to use a switch statment..
/* tried looking up how to do this...
switch simply doesn't work like "if/else". "if"
tests whether the condition is truthy. "switch" tests
whether the expression after the "switch" is === to 
the value of the expression after the case.
*/

/*age = 7
switch (age) {
  case 1:
    age < 13; return("Elementary");
}
tried whichScool too - Nope! some cases if/else just works
This code did not run */

