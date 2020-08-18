let x = 100
let y = 200

for (let i = x ; i <= y; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("Loopy Lighthouse")
  } else if (i % 4 === 0){
    console.log("Lighthouse")
  }   else if (i % 3 === 0) {
    console.log("Loopy")
  } else {
    console.log(i);
  }
}
