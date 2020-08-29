function lastIndexOf (array, num) {
  let testn = false;
  let result = 0;
  for (let i = array.length-1; i >=0; i--) {
    if (array[i] === num) {
      result = i;
      testn = true;
      break;
    }
  }
  if (testn) {
    return result;
  } else {
    return -1;
  }
}


  

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);