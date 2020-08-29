

function range(start, end, step) {
  let resultArray = [];
  let emptyArray = []
  if (start < end && step >= 1){
    for (let i = start; i <= end; i += step) {
      resultArray.push(i);
    }
    return resultArray;
  }else {
    return emptyArray
  } 
} 
console.log(range(0, 10, 0));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

