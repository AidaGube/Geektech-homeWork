// add tasks
document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === '') {
        alert('Please enter a task')
    } else {
        (document.querySelector('.tasks').innerHTML
            += `
    <div class="task">
    <span class="taskName">${document.querySelector('input').value}</span>
    <button class="delete">Delete</button>
    </div>
    `)

        // delete tasks queryselector

        
        let current_tasks = document.querySelectorAll('.delete'); //вытащить кнопку в переменную current__tasks
        for (let i = 0; i < current_tasks.length; i++) { // i++ итерация
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
        };

        /////// done task///////
        let doneTask = document.querySelectorAll('.taskName');
        for (let i = 0; i < doneTask.length; i++) {
            doneTask[i].onclick = function () {
                this.classList.toggle('completed') // будет срабатывать стиль комлпейтед
            }
        }

    } 
    document.querySelector('input').value = ''
}
