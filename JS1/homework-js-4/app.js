var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']; // исходный массив

var count = {};

// tags.forEach(function(a){
//   if(count[a] !== undefined) {
//     count[a]++
//   } else {
//     count[a] =1
//   }
// })
// // var arr3 = {};

for (var tag of tags) {
  count[tag] = count[tag] ? count[tag] + 1 : 1;
}
console.log(count)


// // var sorttag = [];
// // for (var arr in count)
// //   sorttag.push([arr, count[arr]])

// // sorttag.sort(
// //   function (a, b) {
// //     return b[1] - a[1]
// //   })

// // for (var i = 0; i < sorttag.length; i++) {
// //   arr3[sorttag[i][0]] = sorttag[i][1];
// // }
// // console.log(arr3);

// console.log(count);

console.log(Object.keys(count).sort((a, b) => count[b] - count[a]
))