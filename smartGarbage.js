/*let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};*/
//not sure if I need to declare this object first or not comments indicate "no"


function smartGarbage (trash, bins){
  
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1
  } else if (trash === "compost") {
    bins ['compost'] += 1;
  }
  return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));
// expected { waste: 5, recycling: 2, compost: 5 } changed from example give for testing


