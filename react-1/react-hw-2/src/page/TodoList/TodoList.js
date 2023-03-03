import { useEffect, useState } from "react"
import Select from 'react-select';
import classes from './todoList.module.css'
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import List from "../../components/List/List"
import Input from "../../components/Input/Input"
import removeIcon from '../../assets/9.png'

const TodoList = () => {
    const [state, setState] = useState(false)
    const [newtitle, setNewtitle] = useState('')
    const [search, setSearch] = useState('') // внутри скобок изначальное состояние 
    const [currentEdit, setCurrentEdit] = useState()
    // list of Todo
    const [list, setList] = useState([])

    const handleShow = () => setState(!state)
    // fc for add new todos;
    const handleAdd = () => {
        setList((prevTodo) => {
            return [...prevTodo, { id: list.length + 1, title: newtitle, completed: false }]
        })
        setNewtitle('')
        handleShow()
    }
    // function for change completed of todo;
    const handleDone = (id) => {
        const currentIndex = list.findIndex((todo) => todo.id === id);
        list[currentIndex].completed = !list[currentIndex].completed;
        setList([...list]);
    }
    // delete todo with id;
    const handleDelete = (id) => {
        setList(list.filter(todo => todo.id !== id))
    }
    const handleNewtitle = (event) => {
        setNewtitle(event.target.value)
    }

    // edit todo with id and new Text;
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

    const handleCancel = (cancelTodo) => {
        console.log(cancelTodo);
        setCurrentEdit()
    }

    // массив зависимости ессли то что лежит [] если не стоит то при каждом обновление реакта он будет отображаться
    // nj jy dct dblbn rfr rjvgytyn ljk;ty xnj-nj j,yjdbnm dspsdf.n aeyrwb. rjnjhfz kt;bn dyenhb 
    // изменили зависимость и он рендерит эту переменную 
    // юзэффект срабатывает при своей зависимости мы меняем одну из зависимостей и эс перевызывает свою колбэк функцию
    //[] если пустые то он срабатывает один раз он не знает нужно ли вызывать колбек функцию didMount
    // внутри можно возвращать return => она является unMounting они засоряют память и нужно очищать 

    /// Получаем список из нашего localStorage
    // сохраняем данные внутри браузера 
    //который записывает весь список 
    useEffect(() => {
        const myLocalList = JSON.parse(localStorage.getItem('todoList'))  // получение списка из хранилище // все списки которы мы сохранили до этого 
        if (myLocalList?.length !== 0) {  // если он существует то только в этом случае записывай  // проверка на длину массива
            setList(myLocalList)
        } // срабатывает один раз при обновлении нашей страницы
    }, [])// чтобы срабатывал один раз при фазе mounting(didMount);

    //localstorage.clear можно очистbnm

    // Записывает иземенения в localStorage;
    useEffect(() => {  //отслеживает наши обновления
        localStorage.setItem('todoList', JSON.stringify(list)) //список с ключом todoList
        return () => {
        } //отписываемся от каких то вещей 
    }, [list]) //тут поставили зависимость он записывается при изменении везде где есть list он обновляет там все прежнии состояния и в это время срабатывает useEffect
    // если мы меняем наш список то меняй и перезаписывай такой список для нашего локалСторедж
    // делаем манипуляцию локально но получаем не сразу только после обновления

    const clearTask = () => {
        setList([])
        localStorage.clear()
    }

    const options = [
        { value: 'all', label: 'Все таски' },
        { value: 'true', label: 'Выполненные' },
        { value: 'false', label: 'Не выполненные' },
    ]

    // const handleSelect = (event) => {
    //     const selecting = event.value
    //     if (selecting === 'all') {
    //         setList([...list])
    //     } else {
    //         const selectRes = list.filter(item => {
    //             if (selecting === 'true') {
    //                 return item.completed === true
    //             } else if (selecting === 'false') {
    //                 return item.completed === false
    //             }
    //         })
    //         setList([...selectRes])
    //     }
    //     setSelect(selecting);
    // }


    /// variable for search result;
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const resultSearch = list.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

    // for filtering task select
    const [select, setSelect] = useState("all");
    const handleSelect = (event) => {
        setSelect(event.value)
    }

    let resultFilter
    if (select === 'all') {
        resultFilter = resultSearch
    } else if (select === 'true') {
        resultFilter = list.filter(todo => todo.completed === true)
    } else if (select === 'false') {
        resultFilter = list.filter(todo => todo.completed === false)
    } else {
        resultFilter = null
    }

    return (
        <div className={classes.wrapper}>
            <Select
                options={options}
                className='select'
                onChange={handleSelect}
                defaultValue="all"
            />
            <Button onClick={handleShow}>
                Добавить
            </Button>
            <div className={classes.inp}>
                <Input
                    placeholder={'Поиск'}
                    onChange={handleSearch}
                    name={'search'}
                    value={search}
                />
                <span></span>
                <button onClick={clearTask} className={classes.btn}>
                    <img src={removeIcon} alt='edit' className={classes.removeIcon} />
                </button>
            </div>
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
                list={resultFilter}
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