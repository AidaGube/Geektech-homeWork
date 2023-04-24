var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']; // исходный массив

var result = {};
for (var tag of tags) {
  if (result[tag] === undefined) {
    result[tag] = 1
  } else {
    result[tag]++
  }
}
// console.log(result)

// // tags.forEach(function(a){
//   if(result[a] !== undefined) {
//     result[a]++
//   } else {
//     result[a] =1
//   }
// }) 


// for (var tag of tags) {
//   result[tag] = result[tag] ? result[tag] + 1 : 1;
// }
// console.log(result)

var sorttag = [];
for (var arr in result) {
  sorttag.push([arr, result[arr]])
}

sorttag.sort(
  function (a, b) {
    return b[1] - a[1]
  })


var arr3 = {};
for (var i = 0; i < sorttag.length; i++) {
  arr3[sorttag[i][0]] = sorttag[i][1]
}
console.log(arr3);
console.log(sorttag);

// console.log(Object.keys(result).sort((a, b) => result[b] - result[a]
// ))

// Далее создадим еще один объект var result2 = {} с помощью цикла счетчика мы пройдемся по длине нашего массив это sorttag
// // function с параметрами и функции с параметрами по умолчанию arguments(es5), rest(es6)

// function getMax2(numbers) {
//     var maxNum = numbers[0]
//     for (var num of numbers) {
//         maxNum = maxNum > num ? maxNum : num
//     }
//     return maxNum
// }
// console.log(getMax2([1, 2, 3, 6,3,4,5,6,4,9,100]))


var arr = [1, 2, 3, 4, 5, 6]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]) //arr[0] потом прибавится один arr[1]
}

// let i = 0;
// while (++i < 5) {
//     console.log(i)
// }


