import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>404: страница не найдена</h1>
            <p>К сожалению, запрашиваемая страница не найдена.</p>
            <Link to='/'>Home</Link>
        </>
    )
}

export default NotFound