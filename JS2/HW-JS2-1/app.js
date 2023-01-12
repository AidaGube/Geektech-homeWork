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