//first
const nextBtn = document.querySelector('.btnNext')
const prevBtn = document.querySelector('.btnPrev')
const block = document.querySelector('.block')

let num = 1
const clickButton = () => {
    if (num <= 0) {
        num = 200
    } else if (num > 200) {
        num = 1
    }
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(response => response.json())
        .then(todoItem => {
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
}
clickButton()

nextBtn.onclick = () => {
    num++
    clickButton()
}

prevBtn.onclick = () => {
    num--
    clickButton()
}

//second
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then (json => console.log(json))