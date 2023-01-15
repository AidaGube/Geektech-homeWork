/**
 * 1) Используя регулярные выражения необходимо 
 * сделать поле для ввода российского номера как на уроке. 

2) используя рекурсию необходимо заставить блок двигаться 
по странице. Создайте один большой блок и один маленький внутри 
него. Задайте большому блоку position: relative, а малому absolute. И изменяйте параметр позиции малого блока (.style.left=${переменная}px).  
Большому блоку задайте высоту и ширину в 500px, А маленькому 50px на 50px 
Нужно чтобы маленький блок подвинулся слева на право внутри большого блока и остановился.
 */

// first hw
const inputPhone = document.querySelector('#phoneInput')
const checkPhone = document.querySelector('#phoneCheck')
const resultPhone = document.querySelector('.phoneResult')

const phoneRegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/

checkPhone.addEventListener('click', () => {
    if (phoneRegExp.test(inputPhone.value)) {
        resultPhone.innerText = 'Your number is true'
        resultPhone.style.color = '#19a68c'
    } else {
        resultPhone.innerText = 'Your number is false'
        resultPhone.style.color = 'red'
    }
    inputPhone.value = ''
})


//second hw
// function move() {
//     let position = 0
//     let timerId = setInterval(time, 20);
//     function time() {
//         if (position >= 450) {
//             clearInterval(timerId)
//         } else {
//             position++
//             document.querySelector('.block2').style.left = position + 'px'
//         }
//     }
// }
// document.querySelector('.block2').onclick = move


//второй вариант 2го задания
// let position = 0
// function move() {
//     position++
//     document.querySelector('.block2').style.left = position + 'px'
//     if (position >= 450) {
//         return true
//     }
//     setTimeout(move, 20)
// }
// document.querySelector('.block2').onclick = move
