// Задание-1
// var person = prompt('Введите ваше ФИО:');
// var password = prompt('Введите пароль:');
// if (password === 'ye') {
//     alert('Здравствуйте ' + person + ' доступ разрешен!');
// } else {
//     alert('Вход запрещен!');
// }
// // Задание-2

// var personDate = prompt('Введите день вашего рождения:');
// var personMonth = prompt('Введите месяц вашего рождения:');

// if (personDate >= 21 && personDate <= 31 && personMonth === 'март' || personDate <= 20 && personDate !== 31 && personMonth === 'апрель') {
//     alert('your zodiac sign is aries');
// } else if (personDate >= 21 && personDate <= 31 && personMonth === 'апрель' || personDate <= 21 && personDate !== 31 && personMonth === 'май') {
//     console.log('Здравствуйте! Ваш знак зодиака Телец')
// } else if (personDate >= 22 && personDate <= 31 && personMonth === 'май' || personDate <= 21 && personDate !== 31 && personMonth === 'июнь') {
//     console.log('Здравствуйте! Ваш знак зодиака Близнецы')//
// } else if (personDate >= 22 && personDate <= 31 && personMonth === 'июнь' || personDate <= 22 && personDate !== 31 && personMonth === 'июль') {
//     console.log('Здравствуйте! Ваш знак зодиака Рак')
// } else if (personDate >= 23 && personDate <= 31 && personMonth === 'июль' || personDate <= 21 && personDate !== 31 && personMonth === 'август') {
//     console.log('Здравствуйте! Ваш знак зодиака Лев')
// } else if (personDate >= 22 && personDate <= 31 && personMonth === 'август' || personDate <= 23 && personDate !== 31 && personMonth === 'сентябрь') {
//     console.log('Здравствуйте! Ваш знак зодиака Дева')
// } else if (personDate >= 24 && personDate <= 31 && personMonth === 'сентябрь' || personDate <= 23 && personDate !== 31 && personMonth === 'октябрь') {
//     console.log('Здравствуйте! Ваш знак зодиака Весы')
// } else if (personDate >= 24 && personDate <= 31 && personMonth === 'октябрь' || personDate <= 22 && personDate !== 31 && personMonth === 'ноябрь') {
//     console.log('Здравствуйте! Ваш знак зодиака Скорпион')
// } else if (personDate >= 23 && personDate <= 31 && personMonth === 'ноябрь' || personDate <= 22 && personDate !== 31 && personMonth === 'декабрь') {
//     console.log('Здравствуйте! Ваш знак зодиака Стрелец')
// } else if (personDate >= 23 && personDate <= 31 && personMonth === 'декабрь' || personDate <= 20 && personDate !== 31 && personMonth === 'январь') {
//     console.log('Здравствуйте! Ваш знак зодиака Козерог')
// } else if (personDate >= 21 && personDate <= 31 && personMonth === 'январь' || personDate <= 19 && personDate !== 28 && personMonth === 'февраль') {
//     console.log('Здравствуйте! Ваш знак зодиака Водолей')
// } else if (personDate >= 20 && personDate <= 28 && personMonth === 'февраль' || personDate <= 20 && personDate !== 31 && personMonth === 'март') {
//     console.log('Здравствуйте! Ваш знак зодиака Рыбы')
// } else {
//     console.warn('error')
// }


var userBirthDay = prompt('enter your birth day');

var userBirthMonth = prompt('enter your birth month');
if (isNaN(userBirthDay) || userBirthDay < 1 || userBirthDay > 31) {
    alert("Incorrect answer. Please enter a number between 1 and 31. And don't write words, only numbers!");
}else if((userBirthDay >= 21 && userBirthMonth == 'march') || (userBirthDay <= 19 && userBirthMonth == 'april')) {
    alert('your zodiac sign is aries');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 21 && userBirthMonth == 'april') || (userBirthDay >= 20 && userBirthMonth == 'may')) {
    alert('your zodiac sign is taurus');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 21 && userBirthMonth == 'may') || (userBirthDay >= 20 && userBirthMonth == 'june')) {
    alert('your zodiac sign is gemini');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 22 && userBirthMonth == 'june') || (userBirthDay >= 22 && userBirthMonth == 'july')) {
    alert('your zodiac sign is cancer');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 23 && userBirthMonth == 'july') || (userBirthDay >= 22 && userBirthMonth == 'august')) {
    alert('your zodiac sign is leo');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 23 && userBirthMonth == 'august') || (userBirthDay >= 22 && userBirthMonth == 'september')) {
    alert('your zodiac sign is virgo');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 23 && userBirthMonth == 'september') || (userBirthDay >= 22 && userBirthMonth == 'october')) {
    alert('your zodiac sign is libra');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 23 && userBirthMonth == 'october') || (userBirthDay >= 21 && userBirthMonth == 'november')) {
    alert('your zodiac sign is scorpio');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 22 && userBirthMonth == 'november') || (userBirthDay >= 21 && userBirthMonth == 'december')) {
    alert('your zodiac sign is sagittarius');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 22 && userBirthMonth == 'december') || (userBirthDay >= 19 && userBirthMonth == 'january')) {
    alert('your zodiac sign is capricorn');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 20 && userBirthMonth == 'january') || (userBirthDay >= 18 && userBirthMonth == 'february')) {
    alert('your zodiac sign is aquarius');
    alert("well.. that's it, all I wanted to know about you)")
} else if ((userBirthDay >= 19 && userBirthMonth == 'february') || (userBirthDay >= 20 && userBirthMonth == 'march')) {
    alert('your zodiac sign is pisces');
    alert("well.. that's it, all I wanted to know about you)")
}




