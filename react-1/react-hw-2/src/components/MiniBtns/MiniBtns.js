import React from 'react'
import classes from './miniBtns.module.css'

const MiniBtns = ({ children, handleClick, type, todo}) => {
    return (
        <button
            onClick={() => handleClick(todo.id)}
            className={classes['miniBtn'] + ' ' + classes[type]}>
            {children}
        </button>
    )
}

export default MiniBtns