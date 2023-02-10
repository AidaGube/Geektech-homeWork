var arrays = [null, 123, undefined, null, 'qwerty', 34, 65, undefined, null, null, 43, 'aerg', 'пкцйк']
var str = []
var num = []
var nll = []
var und = []
for (let i = 0; i < arrays.length; i++) {
    str.push(arrays[i])
    var a = str.filter(n => { return typeof (n) === 'string' });
    num.push(arrays[i])
    var b = num.filter(n => { return typeof (n) === 'number' });
    nll.push(arrays[i])
    var c = nll.filter(n => { return typeof (n) === 'undefined'});
    und.push(arrays[i])
    var d = und.filter(e => { return typeof (e) === 'object' });
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);

var sortArray = [];
sortArray.push(a,b,c,d)
sortArray.sort(function(a,b){
    return b.length - a.length
})
console.log(sortArray);

// for (let i = 0; i < arrays.length; i++) {
//     str.push(typeof(arrays[i]) === 'string' ? arrays[i] : '')
//     var a = str.filter(Boolean);
//     num.push(typeof(arrays[i]) === 'number' ? arrays[i] : "")
//     var b = num.filter(Boolean);
//     nll.push(arrays[i])
//     var c = nll.filter(n => {return typeof (n) === 'undefined'});
//     und.push(arrays[i])
//     var d = und.filter(e => {return typeof (e) === 'object'});
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


/**
 * Пройдитесь по массиву циклом
 *  и каждый тип данных добавьте в новый массив,
 
 *  то есть нужно отсортировать похожие типы данных в другие массивы
 
 * а затем отсортировать эти массивы от большего к меньшему, 
 
 * то есть на первом месте должен быть массив с наибольшим 
 * количеством элементов.
 * 
 *  В конечном счете из одного большого массива 
 * у вас должно получится несколько маленьких массивов, 
 * которые содержат одинаковые типы данных.
 */