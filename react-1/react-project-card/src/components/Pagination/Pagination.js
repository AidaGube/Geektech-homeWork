import React from 'react'
import './pagination.css';

const Pagination = ({ page, setOffset, totalPosts, offset }) => {
    let pages = []
    for (let i = 1; i <= totalPosts / page; i++) {
        pages.push(i)
    }
    return (
        <div className='pagination'>
            {/* <button onClick={() => changeOffset('prev')}>
                Prev
            </button>
            {page}
            /
            {pageCount}
            <button onClick={() => changeOffset('next')}
            >Next
            </button> */}
            {
                pages.map((pag, index) => {
                    return <button className={pag === offset ? 'active' : ''} onClick={() => setOffset(pag)} key={index}>{pag}</button>
                })
            }
        </div>
    )
}

export default Pagination