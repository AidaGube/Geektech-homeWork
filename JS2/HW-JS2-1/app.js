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
const block2 = document.querySelector('.block2');

block2.addEventListener('click', function myMove() {
    let position = 0;
    let id = setInterval(repeat, 25);
    function repeat() {
        if (position >= 450) {
            clearInterval(id);
        } else {
            position++;
            block2.style.left = position + 'px';
            block2.style.right = position + 'px';
        }
    }
})
