function ageCalculator (name, yearOfBirth, currentYear){
  let client = []
  let ageOfClient = currentYear - yearOfBirth
  client[0] = name
  client[1] = ageOfClient
  return `${client[0]} is ${client[1]} years old.`;
 
  

}
console.log(ageCalculator("Suzie", 1983, 2015))
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
