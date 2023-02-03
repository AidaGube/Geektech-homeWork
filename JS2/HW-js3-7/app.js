let cardTitle = document.querySelector('.card__list')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(item => {
        item.splice(0, 4).forEach(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card__img">
                <img src="./image/e.jpg" alt="logo"/>
            </div>
            <div class="card__title">
               <h3> ${item.title}</h3>
                <p> ${item.body}</p>
           </div> 
    `
            cardTitle.append(div)
            div.setAttribute('class', 'card__block')
        })
})
