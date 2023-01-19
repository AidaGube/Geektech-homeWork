/**-Написать функцию переворота строки 
 * (использовать reverse нельзя, нужно самим прописать логику). 
 * Например: "привет" -> "тевирп" и так далее.
  -написать функцию, которая принимает неограниченное кол-во чисел 
и возвращает их среднюю арифметическую */

// function createText(text) {
//     let newText = "";
    
//     for (let i = 0; i < text.length; i++) {
//         newText += text[(text.length - 1) - i]
//     }
//     return newText
// }
// console.log(createText('Привет'));


// function createText(text) {
//     return text.split('').reduce((a, b) => b + a);
// }
// console.log(createText('Привет, как дела'));


// function meanNumber(numbers) {
//     return numbers.reduce((a, b) => a + b) / numbers.length
// }
// console.log(meanNumber([32, 17, 27, 18, 19, 40, 16, 13, 155, 18, 19, 12, 34, 55]));



// const nums = [32, 17, 27, 18, 19, 40, 16, 13, 155, 18, 19, 12, 34, 55]
// function average() {
//     return nums.reduce((a, b) => (a + b)) / nums.length;
// }
// average(nums)
// console.log(average())

const str = 'Я известная как Аянами Рей, а ты кто?'
function reverseStr() {
    let a = "";
    for (let i = 0; i < str.length; i++) {
        a += str[(str.length - 1) - i];
    }
    return a;
}
reverseStr(str)
console.log(reverseStr())



function createText(text) {
    let newText = "";
    
    for (let i = 0; i < text.length; i++) {
        newText += text[(text.length - 1) - i]
    }
    return newText
}
console.log(createText('тевирп'));

function createText(text) {
    return text.split('').reduce((a, b) => b + a);
}
console.log(createText('Привет, как дела'));