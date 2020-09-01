const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

function judgeVegetable(vegetables, metric) {
  let max = 0
  let submitter = ''

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > max) {
        max = vegetables[i][metric];
        submitter = vegetables[i]['submitter'];
      }
  }
  return submitter;
}
console.log (judgeVegetable(vegetables, metric));

//console.log(judgeVegetable(vegetables,metric)):


/*const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const values = Object.values(fruits)
console.log(values) // [28, 17, 54]*/

  



