const photo = document.querySelector('.photos')
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(item => {
        item.splice(0, 49).forEach(item => {
            const div = document.createElement('div')
            div.innerHTML = `
                <img src="${item.url}" alt=""/>
                `
            photo.append(div)
        })
})
