const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    //!Создание экземпляра объекта XMLHttpRequest
    const request = new XMLHttpRequest() 
    //!который инициализирует только что созданный запрос
    request.open('GET', 'peoples.json') 
    // указывание заголовка //Передаёт правильный заголовок в запросе
    request.setRequestHeader('Content-type', 'application/json')
    //!который позволяет отправить запрос на сервер
    request.send() 
    //! Запрос завершён. Здесь можно обрабатывать результат.
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            const names = document.createElement('div')
            names.innerHTML = 'name: ' + people.name
            const ages = document.createElement('div')
            ages.innerHTML = 'age: ' + people.age + ' y.o'
            document.querySelector('.block').append(names, ages)
        });
    })
})
