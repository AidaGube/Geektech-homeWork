import React, { useRef, useState } from 'react'
import List from '../../components/List/List'
import Modal from './../../components/Modal/Modal';
import AboutPages from './../AboutPages/AboutPages';

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
            id: new Date().getTime(),
            title: titleRef.current.value,
        };
        setList([...list, newList]);
        titleRef.current.value = '';
    }
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