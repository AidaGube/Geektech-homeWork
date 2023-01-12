/**-Написать функцию переворота строки 
 * (использовать reverse нельзя, нужно самим прописать логику). 
 * Например: "привет" -> "тевирп" и так далее.
  -написать функцию, которая принимает неограниченное кол-во чисел 
и возвращает их среднюю арифметическую */

function createText(text) {
    let newText = "";
    
    for (let i = 0; i < text.length; i++) {
        newText += text[(text.length - 1) - i]
    }
    return newText
}
console.log(createText('Привет'));


function createText(text) {
    return text.split('').reduce((a, b) => b + a);
}
console.log(createText('Привет, как дела'));


function meanNumber(numbers) {
    return numbers.reduce((a, b) => a + b) / numbers.length
}
console.log(meanNumber([32, 17, 27, 18, 19, 40, 16, 13, 155, 18, 19, 12, 34, 55]));

