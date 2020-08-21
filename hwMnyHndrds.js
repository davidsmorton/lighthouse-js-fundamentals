function howManyHundreds (num){
  num = num / 100
  return Math.floor(num)
  }  


console.log(howManyHundreds(1111));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0)