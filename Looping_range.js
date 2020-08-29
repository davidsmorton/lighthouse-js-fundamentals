

function range(start, end, step) {
  let resultArray = [];
  let emptyArray = []
  if (start < end){
    for (start; start < end; start += step) {
      resultArray.push(start);
    }
     return resultArray;
  } else if (start === undefined){
    return emptyArray
  } else if (step < 1){
    return emptyArray
  }
  
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

