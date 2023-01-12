/**
 * 
 * 1) Используя регулярные выражения необходимо сделать 
 * поле для ввода российского номера как на уроке. 

2) используя рекурсию необходимо заставить блок двигаться по странице. 
Создайте один большой блок и один маленький внутри него. 
Задайте большому блоку position: relative, а малому absolute. 
И изменяйте параметр позиции малого блока (.style.left=${переменная}px).  
 */
// first hw
// const inputPhone = document.querySelector('#phoneInput')
// const checkPhone = document.querySelector('#phoneCheck')
// const resultPhone = document.querySelector('.phoneResult')

// const phoneRegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/

// checkPhone.addEventListener('click', () => {
//     console.log(inputPhone.value.match(phoneRegExp));
//     if (phoneRegExp.test(inputPhone.value)) {
//         resultPhone.innerText = 'Your number is true'
//         resultPhone.style.color = 'green'
//     } else {
//         resultPhone.innerText = 'Your number is false'
//         resultPhone.style.color = 'red'
//     }
// })

//secon hw
const block1 = document.querySelector('.block1')
const block2 = document.querySelector('.block2')
block1.style.position = 'relative'
block2.style.position = 'absolute'
block2.style.left = '100px'
function moveRight() {
    let left = block2.style.left;
    if (left != '') {
        left = parseInt(left)
    } else {
        left = 100
    }
    left += 50
    block2.style.left = left + 'px'
}
block2.addEventListener('click', moveRight, false)