function handleArrSort(arr) {
    let d;
    for(var i= 0; i<arr.length;i++){
        for(var j=0;j<i;j++){
            if(parseInt(arr[i].systemCode) < parseInt(arr[j].systemCode)) {
                d = arr[j];
                arr[j] = arr[i];
                arr[i] = d;
            }
        }
    }
    return arr;
}


let arr = [
    {'systemCode':12},
    {'systemCode':1},
    {'systemCode':2},
    {'systemCode':112},
    {'systemCode':121},
    {'systemCode':120},
    {'systemCode':12},
];


let a = arr.sort(function(a,b){
        return a.systemCode - b.systemCode;
    })

console.log(handleArrSort(arr));
console.log(a);

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});