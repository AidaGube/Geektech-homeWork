/**1)  Доработать прошлое ДЗ! Нужно чтобы малый квадрат теперь двигался по всему родительскому квадрату.
2) Отобразить на странице цифру 0 , создать 2 кнопки: stop и start
Если нажать на start то цифра начнет увеличиваться на единицу до того момента пока вы не нажмете на кнопку stop
Используйте методы которые мы прошли на уроке
 */
const box = document.querySelector('.box')
let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 450 && positionY == 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX == 450 && positionY < 450) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionY == 450 && positionX > 0) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()
