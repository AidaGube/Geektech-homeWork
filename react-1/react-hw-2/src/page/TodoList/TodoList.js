import { useEffect, useState } from "react"
import classes from './todoList.module.css'
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import List from "../../components/List/List"
import Input from "../../components/Input/Input"

const getLocalList = () => {
    let item = localStorage.getItem('items')
    console.log(item);
    if (item) {
        return JSON.parse(localStorage.getItem('items'))
    } else {
        return []
    }
}
const TodoList = () => {
    const [state, setState] = useState(false)
    const [newtitle, setNewtitle] = useState('')
    const [search, setSearch] = useState('') // внутри скобок изначальное состояние 
    const [currentEdit, setCurrentEdit] = useState()
    const [list, setList] = useState(getLocalList() || [
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

    useEffect(() =>{
        localStorage.setItem('items', JSON.stringify(list))
    },[list])

    const handleShow = () => setState(!state)
    const handleAdd = () => {
        setList((prevTodo) => {
            return [...prevTodo, { id: list.length + 1, title: newtitle, completed: false }]
        })
        setNewtitle('')
        handleShow()
    }
    const handleDone = (id) => {
        const currentIndex = list.findIndex((todo) => todo.id === id);
        list[currentIndex].completed = !list[currentIndex].completed;
        setList([...list]);
    }
    const handleDelete = (id) => {
        setList(list.filter(todo => todo.id !== id))
    }
    const handleNewtitle = (event) => {
        setNewtitle(event.target.value)
    }
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const resultSearch = list.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
   
    const handleEdit = (editTodo) => {
        const editList = list.map(todo => {
            if (todo.id === editTodo.id) {
                return { ...todo, title: editTodo.title }
            }
            return todo;
        })
        setList([...editList])
        setCurrentEdit()
    }

    const handleCancel = (cancelTodo) =>{
        console.log(cancelTodo);
      setCurrentEdit()
    }

    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>
                Добавить
            </Button>
            <Input
                placeholder={'Поиск'}
                onChange={handleSearch}
                name={'search'}
                value={search}
            />
            <span></span>
            {state && <Modal handleShow={handleShow}>
                <button className={classes.close} onClick={handleShow}>X</button>
                <h2>{newtitle}</h2>
                <Input
                    placeholder={'Добавить'}
                    onChange={handleNewtitle}
                    name={'add'}
                    value={newtitle}
                />
                <span></span>
                <Button onClick={handleAdd}>
                    Add
                </Button>
            </Modal>
            }
            <List
                list={resultSearch}
                handleChangeCarrent={setCurrentEdit}
                handleDone={handleDone}
                handleDelete={handleDelete}
                currentEdit={currentEdit}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
            />
        </div>
    )

}
export default TodoList