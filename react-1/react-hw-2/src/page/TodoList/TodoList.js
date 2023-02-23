import classes from './todoList.module.css'
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"
import List from "../../components/List/List"
import Input from "../../components/Input/Input"

const TodoList = () => {

    const [state, setState] = useState(false)
    const [newtitle, setNewtitle] = useState('')
    const [search, setSearch] = useState('') // внутри скобок изначальное состояние 
    const [list, setList] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        }
    ])
    const handleShow = () => setState(!state)

    const handleAdd = () => {
        setList((prevTodo) => {
            console.log(prevTodo);
            return [...prevTodo, { id: list.lenght + 1, title: newtitle, completed: false }]
        })
        setNewtitle('')
        handleShow()
    }


    const handleNewtitle = (event) => {
        setNewtitle(event.target.value)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const filterTodo = list.filter(todo => {
        return todo.title.toLowerCase().includes(search.toLowerCase())
    })


    const handleDone = (id) => {
        const currentIndex = list.findIndex((todo) => todo.id === id)
        list[currentIndex].completed = !list[currentIndex].completed
        setList([...list])
    }

    const handleDelete = (id) => {
        setList(list.filter(todo => todo.id != id))
    }

    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>Добавить</Button>
            <Input
                placeholder={'Поиск'}
                onChange={handleSearch}
                name={'search'}
                value={search} 
            />
            <span></span>
            {
                state && <Modal handleShow={handleShow}>
                    <button className={classes.close} onClick={handleShow}>X</button>
                    <h2>{newtitle}</h2>
                    <Input
                        placeholder={'Добавить'}
                        onChange={handleNewtitle}
                        name={'add'}
                        value={newtitle} 
                    />
                    {/* <input onChange={(event) => handleSearch(event.target.value)} className={classes.input} type="text" placeholder='search' /> */}
                    <span></span>
                    <Button onClick={handleAdd}>Add</Button>
                </Modal>
            }
            <List filterTodo={filterTodo} list={list} handleDone={handleDone} handleDelete={handleDelete} />
        </div>
    )

}
export default TodoList