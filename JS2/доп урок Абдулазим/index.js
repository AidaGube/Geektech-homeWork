const main = document.querySelector('.main .container')

function getAnimes () {
    fetch('http://localhost:3001/animes')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(anime => {
                main.innerHTML += `
                    <div class="card">
                        <img src="${anime.images.card}" />
                        <h1>${anime.name}</h1>
                        <span>Рейтинг: <span>${anime.rating}</span></span>
                    </div>
                `
            })
        })
}

getAnimes()