let cardTitle = document.querySelector('.card__list')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(item => {
        item.forEach(item => {
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


//ПРИМЕРЫ
// async function cardFetch() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data = await response.json()
//     data = data.splice(0, 1)
//
//     let cardTitle = document.querySelector('.card__tit')
//     let key;
//
//     for (key in data) {
//         cardTitle.innerHTML += `
//         <div class="card__title">
//         <h3>${data[key].title}</h3>
//          <p> ${data[key].body}</p>
//         </div>
//         `
//     }
// }
// cardFetch()

// const cardTitle = document.querySelector('.card__list')
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(item => {
//     item.splice(0, 4).map(i => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <div class="card__block">
//             <div class="card__img">
//                 <img src="./image/e.jpg" alt="logo"/>
//             </div>
//             <div class="card__title">
//                <h3>TITLE: ${i.title}</h3>
//                 <p>BODY: ${i.body}</p>
//            </div> 
//         </div>          
//     `
//         cardTitle.append(div)
//         div.setAttribute('class', 'card__tit')
//     })
// })
