//const moves = ["north", "north", "west", "west", "north", "east", "north"];
const moves = ["north", "north", "west", "west", "north", "east", "north"];
//const moves = ["east", "east", "east", "east", "west", "west", "south"];
//const moves = ["south", "south", "south", "south", "south", "north", "south"];

function finalPosition (moves){
  let coordinates = []
  let x = 0;
  let y = 0;
  for(let move of moves) {
    if (move === "north"){
      y = y + 1
    } 
    if (move === "south"){
      y = y - 1
    } 
    if (move === "east"){
      x = x + 1
    }
    if (move === "west"){
      x = x - 1
    }
    coordinates[0] = x
    coordinates [1] = y
  }
  return coordinates 
}

console.log(finalPosition(moves));
console.log(finalPosition(moves));