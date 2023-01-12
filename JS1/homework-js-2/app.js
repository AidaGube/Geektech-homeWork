/* Напишите программу с помощью switch..case, как мы на уроке делали. 
Программа должна работать следующим образом : день недели изначально будет 
задан на английском, а программа в консоли будет выводить этот же день на 
русском языке. Программа должна работать ,
 если  написано и так Monday, и так monday */

 
let langWeek = 'sunday';
switch (langWeek) {
    case 'Monday':
    case 'monday':
        console.log('Понедельник')
        break
    case 'Tuesday':
    case 'tuesday':
        console.log('Вторник')
        break
    case 'Wednesday':
    case 'wednesday':
        console.log('Среда')
        break
    case 'Thursday':
    case 'thursday':
        console.log('Четверг')
        break
    case 'Friday':
    case 'friday':
        console.log('Пятница')
        break
    case 'Saturday':
    case 'saturday':
        console.log('Суббота')
        break
    case 'Sunday':
    case 'sunday':
        console.log('Воскресенье')
        break
    default:
        console.log('Программа не работает :( ')
}


/*  Создайте объект какого-нибудь сериала 
(на ваш выбор, даже Великолепный Век подойдет), 
в объекте обязательно должны быть поля name, 
releaseDate(дата выхода), 
mainActor(главный актер,
     если несколько актеров будете передавать, 
то просто через запятую перечислите),
 episodes(кол-во серий), 
также внутри этого объекта должен быть еще один объект 
(название и какие там будут поля остаются на ваше усмотрение). 
В консоли должно вывестись все таким образом : 
 Сериал + {название сериала}, 
был выпущен + {дата выхода} года. В главных ролях + {имена актеров}. 

В {название сериала} {кол-во серий} эпизодов или серий. 
Может еще добавить от себя что-то, 
может какие-нибудь интересные факты о сериале, 
чем больше, тем лучше будет) 
ДЗ чисто на практику работы с объектами и на конкатенацию строк в  console.log(). */

var series = {
    name: 'Уэнсдэй',
    releaseDate: '23 ноября 2022',
    mainActor: 'Дженна Мари Ортега',
    episodes: 8,
    genres: 'Comedy, Crime, Family, Fantasy, Mystery',
    details: {
        country: 'США',
        time: '45 мин',
        language: 'Английском'
    }
}
console.log('Сериал', series.name, 'был выпущен', series.releaseDate,
    'года. В главных ролях', series.mainActor, '. В',
    series.name, series.episodes, 'серий. Длительность одной серии -',
    series.details.time, '. Сериал был снят в', series.details.country, 'на', series.details.language, 'языке'
)