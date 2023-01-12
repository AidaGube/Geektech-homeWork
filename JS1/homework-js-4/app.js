var arrays = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']; // исходный массив

var arr2 = {};
var arr3 = {};

for (var array of arrays) {
  arr2[array] = arr2[array] ? arr2[array] + 1 : 1;
}
console.log(arr2)


var sortArray = [];
for (var arr in arr2)
  sortArray.push([arr, arr2[arr]])

sortArray.sort(
  function (a, b) {
    return b[1] - a[1]
  })
 
for (var i = 0; i < sortArray.length; i++) {
  arr3[sortArray[i][0]] = sortArray[i][1];
}
console.log(arr3);