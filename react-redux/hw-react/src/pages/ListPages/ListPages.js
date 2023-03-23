import { useEffect, useRef, useState } from 'react'
import List from '../../components/List/List'
import Modal from './../../components/Modal/Modal';

const ListPages = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [list, setList] = useState([
        {
            id: 1,
            title: 'hello'
        },
        {
            id: 2,
            title: 'hello'
        },
        {
            id: 3,
            title: 'hello'
        },
    ])
    const titleRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = {
            id: list.length + 1,
            title: titleRef.current.value,
        };
        setList([...list, newList]);
        titleRef.current.value = '';
    }

    // useEffect(() => {
    //     localStorage.setList('list', JSON.stringify(list))
    // }, [list])
  
    // useEffect(() => {
    //     const myLocalList = JSON.parse(localStorage.getItem('list'))
    //     if (myLocalList?.length !== 0) {
    //         setList(myLocalList)
    //     }
    // }, [])
    
    return (
        <div>
            <button className='listButton' type="button" onClick={() => setIsModalOpen(true)}>
                Добавить элемент
            </button>
            <List list={list} />
            {isModalOpen && <Modal
                setIsModalOpen={setIsModalOpen}
                handleSubmit={handleSubmit}
                titleRef={titleRef}
            />
            }
        </div>
    )
}

export default ListPages