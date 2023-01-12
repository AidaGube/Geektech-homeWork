// через функцию либо циклом внутри цикла это все сделать
// если внутри цикла используют функцию
// this  если внутри функции не будет работать,
//вытащить все элементы и работать с названием внутри функции 

const counters = document.querySelectorAll(".counters")
const decBtn = document.querySelectorAll('.decrement') //-
const incBtn = document.querySelectorAll('.increment')
const input = document.querySelector('input')



for (i = 0; i < incBtn.length; i++) {
    incBtn[i].addEventListener('click', function () {
        input.value = +input.value + 1
    })

    decBtn[i].addEventListener('click', function () {
        input.value = (input.value > 1) ? (input.value - 1) : (input.value - 1);
    })
}