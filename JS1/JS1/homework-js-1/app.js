// Задание-1
// var person = prompt('Введите ваше ФИО:');
// var password = prompt('Введите пароль:');
// if (password === 'yes') {
//     alert('Здравствуйте ' + person + ' доступ разрешен!');
// } else {
//     alert('Вход запрещен!');
// }



// Задание-2

var personDate = prompt('Введите день вашего рождения:');
var personMonth = prompt('Введите месяц вашего рождения:');

if (personDate >= 21 && personDate <= 31 && personMonth === 'март' || personDate <= 20 && personDate !== 31 && personMonth === 'апрель') {
    console.log('Здравствуйте! Ваш знак зодиака Овен')
} else if (personDate >= 21 && personDate <= 31 && personMonth === 'апрель' || personDate <= 21 && personDate !== 31 && personMonth === 'май') {
    console.log('Здравствуйте! Ваш знак зодиака Телец')
} else if (personDate >= 22 && personDate <= 31 && personMonth === 'май' || personDate <= 21 && personDate !== 31 && personMonth === 'июнь') {
    console.log('Здравствуйте! Ваш знак зодиака Близнецы')//
} else if (personDate >= 22 && personDate <= 31 && personMonth === 'июнь' || personDate <= 22 && personDate !== 31 && personMonth === 'июль') {
    console.log('Здравствуйте! Ваш знак зодиака Рак')
} else if (personDate >= 23 && personDate <= 31 && personMonth === 'июль' || personDate <= 21 && personDate !== 31 && personMonth === 'август') {
    console.log('Здравствуйте! Ваш знак зодиака Лев')
} else if (personDate >= 22 && personDate <= 31 && personMonth === 'август' || personDate <= 23 && personDate !== 31 && personMonth === 'сентябрь') {
    console.log('Здравствуйте! Ваш знак зодиака Дева')
} else if (personDate >= 24 && personDate <= 31 && personMonth === 'сентябрь' || personDate <= 23 && personDate !== 31 && personMonth === 'октябрь') {
    console.log('Здравствуйте! Ваш знак зодиака Весы')
} else if (personDate >= 24 && personDate <= 31 && personMonth === 'октябрь' || personDate <= 22 && personDate !== 31 && personMonth === 'ноябрь') {
    console.log('Здравствуйте! Ваш знак зодиака Скорпион')
} else if (personDate >= 23 && personDate <= 31 && personMonth === 'ноябрь' || personDate <= 22 && personDate !== 31 && personMonth === 'декабрь') {
    console.log('Здравствуйте! Ваш знак зодиака Стрелец')
} else if (personDate >= 23 && personDate <= 31 && personMonth === 'декабрь' || personDate <= 20 && personDate !== 31 && personMonth === 'январь') {
    console.log('Здравствуйте! Ваш знак зодиака Козерог')
} else if (personDate >= 21 && personDate <= 31 && personMonth === 'январь' || personDate <= 19 && personDate !== 28 && personMonth === 'февраль') {
    console.log('Здравствуйте! Ваш знак зодиака Водолей')
} else if (personDate >= 20 && personDate <= 28 && personMonth === 'февраль' || personDate <= 20 && personDate !== 31 && personMonth === 'март') {
    console.log('Здравствуйте! Ваш знак зодиака Рыбы')
} else {
    console.warn('error')
}







