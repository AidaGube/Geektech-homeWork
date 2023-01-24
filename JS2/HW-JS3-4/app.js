const btn = document.querySelector('.button')

// btn.addEventListener('click', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'peopels.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         data.forEach(people => {
//             const names = document.createElement('div')
//             names.innerHTML = 'name: ' + people.name
//             const ages = document.createElement('div')
//             ages.innerHTML = 'age: ' + people.age + ' y.o'
//             document.querySelector('.block').append(names, ages)
//         });
//     })
// })



btn.onclick = () => fetch('peopels.json')
.then(resp => resp.json())
.then(data => {
    data.forEach(people => {
        const names = document.createElement('div')
        names.innerHTML = 'name: ' + people.name
        const ages = document.createElement('div')
        ages.innerHTML = 'age: ' + people.age + ' y.o'
        document.querySelector('.block').append(names, ages)
})})